// Core
import React, { FC } from 'react';

// Styles
import { Container } from './styles';

export const GreenText: FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};
