// Core
import React, { FC } from 'react';
// import styled from 'styled-components';
import { styled, Typography, TypographyProps } from '@mui/material';

// const Container = styled.div`
//     font-family: 'Nunito';
//     /* font-size: ${({ theme }) => theme.fonts.size.ninth};
//     color: ${({ theme }) => theme.colors.primary[ 50 ]}; */
// `;

const Container = styled(Typography, {})(({ theme }) => ({
    fontSize:   theme.fonts.size.ninth,
    color:      theme.colors.primary[ 50 ],
    fontFamily: 'Nunito',
}));

export const TitleSecond : FC<TypographyProps> = ({ children, ...props }) => {
    return (
        <Container
            variant = 'h2'
            { ...props }>
            {children}
        </Container>
    );
};

