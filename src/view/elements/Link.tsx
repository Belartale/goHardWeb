// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface TypeProps {
    to: string
}

const Container = styled.a`
    cursor: pointer;
`;

export const Link: FC<TypeProps> = ({ to, children, ...props }) => {
    const navigate = useNavigate();

    return (
        <Container
            { ...props }
            onClick = { () => navigate(to) }>
            {children}
        </Container>
    );
};

