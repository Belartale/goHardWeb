// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface TypeProps {
    to: string
}

const Container = styled.a`
    cursor: pointer;
`;

export const Link: FC<TypeProps> = ({ to, children, ...props }) => {
    const { push } = useHistory();

    return (
        <Container
            { ...props }
            onClick = { () => push(to) }>
            {children}
        </Container>
    );
};

