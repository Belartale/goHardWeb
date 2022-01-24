// Core
import React, { FC } from 'react';
import { styled, Typography, TypographyProps } from '@mui/material';

const Container = styled(Typography, {})`
    font-size:   ${({ theme }) => theme.fonts.size[ 900 ]};
    font-family: 'Nunito';
    font-weight: 400;
    color:      ${({ theme }) => theme.colors.primary[ 50 ]};
`;

export const TitleSecond: FC<TypographyProps> = ({ children, ...props }) => {
    return (
        <Container
            variant = 'h2'
            { ...props }>
            {children}
        </Container>
    );
};

