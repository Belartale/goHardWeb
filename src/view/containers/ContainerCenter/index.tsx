// Core
import React, { FC } from 'react';
import { BoxProps } from '@mui/material';

// Styles
import { Container } from './styles';

// Types
interface PropTypes extends BoxProps {
    /* type props here */
}

export const ContainerCenter: FC<PropTypes> = ({ children, ...props }) => {
    return (
        <Container { ...props }>
            {children}
        </Container>
    );
};
