// Core
import React, { FC } from 'react';
import { Typography, styled, TypographyProps } from '@mui/material';
import { TypesColors, TypesFonts } from '../../assets';

const minusNumber = ({ theme, number }: {
    theme: {colors: TypesColors, fonts: TypesFonts},
    number: number
}): string => `${Number(theme.fonts.size.thirteenth.slice(0, -2)) - number}px`;

const TypographyStyled = styled(Typography, { name: 'TypographyStyled' })(({ theme }) => ({
    fontSize:   '50px',
    fontFamily: 'Nunito',
    fontWeight: 700,
    textAlign:  'center',

    [ theme.breakpoints.up('sm') ]: {
        fontSize: minusNumber({ theme, number: 25 }),
    },
    [ theme.breakpoints.up('md') ]: {
        fontSize:  minusNumber({ theme, number: 10 }),
        textAlign: 'left',
    },
    [ theme.breakpoints.up('lg') ]: {
        fontSize: theme.fonts.size.thirteenth,
    },
}));

export const Title: FC<TypographyProps> = ({ children, ...props }) => {
    return (
        <TypographyStyled
            { ...props }
            variant = 'h1'>
            {children}
        </TypographyStyled>
    );
};


// Nunito 800 700 400 300
