// Core
import React, { FC, useState, useEffect } from 'react';
import {
    styled,
    Box,
    CircularProgress,
    CircularProgressProps,
} from '@mui/material';

// Types
interface SpinnerProps extends CircularProgressProps {
    absolute?: boolean
}

const Container = styled(Box, {})<{ isActive: boolean, absolute: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
    cursor: not-allowed;

    ${({ absolute }) => absolute
        ? {
            position: 'absolute',
            top:      0,
            bottom:   0,
            left:     0,
            right:    0,
            zIndex:   1,
        }
        : {
            width:  '100%',
            height: '100%',
        }}


    opacity: 0;
    ${({ isActive }) => isActive && { opacity: 1 }};
    transition: opacity 1s;
`;

const CircularProgressStyled = styled(CircularProgress, {})`
    color: ${({ theme }) => theme.colors.success[ 50 ]}; 
`;

// eslint-disable-next-line init-declarations
let timerId: ReturnType<typeof setTimeout>;

export const Spinner: FC<SpinnerProps> = ({ absolute = false, ...props }) => {
    const [ isActive, setIsActive ] = useState(false);


    useEffect(() => {
        timerId = setTimeout(() => void setIsActive(true), 500);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <Container
            absolute = { absolute }
            isActive = { isActive }>
            <CircularProgressStyled
                { ...props }
            />
        </Container>
    );
};

