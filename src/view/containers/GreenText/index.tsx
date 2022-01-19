// Core
import React, { FC } from 'react';

// Styles
import { Container } from './styles';

// Types
type PropsTypes = {
    style?: object
}

export const GreenText: FC<PropsTypes> = ({ children, style, ...props }) => {
    return (
        <Container
            style = { style }
            { ...props }>
            {children}
        </Container>
    );
};
