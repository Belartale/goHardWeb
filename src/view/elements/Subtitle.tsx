// Core
import React, { FC } from 'react';
import { Typography, styled, TypographyProps } from '@mui/material';

const Container = styled(Typography, { name: 'SubtitleStyled' })`
    font-size:   ${({ theme }) => theme.fonts.size[ 600 ]};
    font-family: 'Nunito';
    font-weight: 300;
    line-height: ${({ theme }) => theme.fonts.lineHeight[ 700 ]};
    color:      ${({ theme }) => theme.colors.grey[ 50 ]};
`;

export const Subtitle: FC<TypographyProps> = ({ children, ...props }) => {
    return (
        <Container
            { ...props }>
            {children}
        </Container>
    );
};

