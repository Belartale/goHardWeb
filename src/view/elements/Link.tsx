// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, Box, BoxProps } from '@mui/material';

interface TypeProps extends BoxProps {
    to?: string
}

export const Container = styled(Box, {})`
    cursor: pointer;
`;

export const Link: FC<TypeProps> = ({ to, children, ...props }) => {
    const navigate = useNavigate();

    return (
        <Container
            { ...props }
            onClick = { () => to && navigate(to) }>
            {children}
        </Container>
    );
};

