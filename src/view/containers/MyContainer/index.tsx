// Core
import React, { FC } from 'react';
import { Container } from '@mui/material';

// Bus
// import {} from '../../../bus/'

// Styles
// import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
    children?: React.ReactNode | React.ReactNodeArray;
    sx?: object;
}

export const MyContainer: FC<PropTypes> = ({ children, sx }) => {
    return (
        <Container
            maxWidth = 'lg'
            sx = { sx }>
            {children}
        </Container>
    );
};
