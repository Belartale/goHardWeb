// Core
import React, { FC } from 'react';
import { Typography, styled, TypographyProps } from '@mui/material';

const Container = styled(Typography, { name: 'SubtitleStyled' })(({ theme }) => ({
    fontSize:   theme.fonts.size[600],
    fontFamily: 'Nunito',
    fontWeight: 300,
    lineHeight: theme.fonts.lineHeight[ 700 ],
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

