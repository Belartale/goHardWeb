// Core
import React, { FC } from 'react';
import { Container, ContainerProps } from '@mui/material';

export const MyContainer: FC<ContainerProps> = ({ children, sx }) => {
    return (
        <Container
            maxWidth = 'xl'
            sx = { sx }>
            {children}
        </Container>
    );
};
