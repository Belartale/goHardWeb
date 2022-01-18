// Core
import { Box } from '@mui/material';
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
export interface PropTypesHeader {
    //todo any
    image: any
    backgroundsize?: string
    opacity?: boolean
}

export const Header: FC<PropTypesHeader> = ({ children, ...props }) => {
    return (
        <S.Container { ...props }>
            {children}
        </S.Container>
    );
};
