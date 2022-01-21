// Core
import React, { FC } from 'react';
import { styled, Typography, TypographyProps } from '@mui/material';

const Container = styled(Typography, {})(({ theme }) => ({
    fontSize:   theme.fonts.size[900],
    fontFamily: 'Nunito',
    fontWeight: 400,
    color:      theme.colors.primary[ 50 ],
}));

export const TitleSecond: FC<TypographyProps> = ({ children, ...props }) => {
    return (
        <Container
            variant = 'h2'
            { ...props }>
            {children}
        </Container>
    );
};

