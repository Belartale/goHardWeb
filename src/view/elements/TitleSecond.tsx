// Core
import React, { FC } from 'react';
// import styled from 'styled-components';
import { styled } from '@mui/material';

// Types
interface TypeProps {
    children: string
}

// const Container = styled.div`
//     font-family: 'Nunito';
//     /* font-size: ${({ theme }) => theme.fonts.ninth};
//     color: ${({ theme }) => theme.colors.primary[ 50 ]}; */
// `;

const Container = styled('div', { name: 'TitleSecondStyled' })(({ theme }) => ({
    fontSize:   theme.fonts.ninth,
    color:      theme.colors.primary[ 50 ],
    fontFamily: 'Nunito',
}));

export const TitleSecond : FC<TypeProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

