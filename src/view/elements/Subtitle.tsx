// Core
import React, { FC } from 'react';
import { Typography, styled, TypographyProps } from '@mui/material';

const Container = styled(Typography, { name: 'SubtitleStyled' })(({ theme }) => ({
    fontSize:   theme.fonts.size.sixth,
    fontFamily: 'Nunito',
    fontWeight: 300,
    color:      theme.colors.grey[ 50 ],
}));


export const Subtitle: FC<TypographyProps> = ({ children, ...props }) => {
    return (
        <Container
            { ...props }>
            {children}
        </Container>
    );
};

