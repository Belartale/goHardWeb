// Core
import React, { FC } from 'react';
import { Typography, styled } from '@mui/material';
import { TypesColors, TypesFonts } from '../../assets';


// Types
interface TypeProps {
    children?: React.ReactNode;
}

const minusNumber = ({ theme, number }: {
    theme: {colors: TypesColors, fonts: TypesFonts},
    number: number
}): string => `${Number(theme.fonts.thirteenth.slice(0, -2)) - number}px`;

export const TypographyStyled = styled(Typography, { name: 'TypographyStyled' })(({ theme }) => ({
    fontSize:                       '50px',
    textAlign:                      'center',
    [ theme.breakpoints.up('sm') ]: {
        fontSize: minusNumber({ theme, number: 25 }),
    },
    [ theme.breakpoints.up('md') ]: {
        fontSize:  minusNumber({ theme, number: 10 }),
        textAlign: 'left',
    },
    [ theme.breakpoints.up('lg') ]: {
        fontSize: theme.fonts.thirteenth,
    },

    display:    'flex',
    alignItems: 'center',


    // root: {
    //     position:  'relative',
    //     ':before': {
    //         position: 'absolute',
    //         content:  '',
    //         // transform: 'rotateX(180deg)',
    //     },
    // },


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
