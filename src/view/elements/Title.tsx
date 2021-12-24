// Core
import React, { FC } from 'react';
import styled from 'styled-components';


// Types
interface TypeProps {
    children?: React.ReactNode;
}

const Container = styled.h1`
    font-size: 70px;

    @media (min-width: 576px) {
        font-size: 100px;
    }
`;

export const Title: FC<TypeProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};


// Nunito 800 700 400 300
