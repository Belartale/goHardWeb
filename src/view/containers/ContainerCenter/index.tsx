// Core
import React, { FC } from 'react';
import { BoxProps } from '@mui/material';

// Styles
import { Container } from './styles';

export const ContainerCenter: FC<BoxProps> = ({ children, ...props }) => {
    return (
        <Container { ...props }>
            {children}
        </Container>
    );
};
