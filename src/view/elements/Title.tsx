// Core
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material';


// Types
interface TypeProps {
    children?: React.ReactNode;
}

export const TypographyStyled = styled(Typography, {})(({ theme }) => ({
    fontSize:                       '50px',
    [ theme.breakpoints.up('sm') ]: {
        fontSize: '70px',
    },
    [ theme.breakpoints.up('md') ]: {
        fontSize: '90px',
    },
    [ theme.breakpoints.up('lg') ]: {
        fontSize: '100px',
    },
}));

export const Title: FC<TypeProps> = ({ children }) => {
    return (
        <TypographyStyled
            variant = 'h1'>
            {children}
        </TypographyStyled>
    );
};


// Nunito 800 700 400 300
