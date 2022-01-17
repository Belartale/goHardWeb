// Core
import { GridProps, Box, Grid } from '@mui/material';
import React, { FC, ReactElement, ReactNode } from 'react';

// Styles
import { Container, Card, CardTitle, CardSubtitle, CardText } from './styles';

// Types
export interface PropTypesBigCard extends GridProps {
    //todo any > src images
    firstTitle: number | any
    secondTitle: ReactElement
    variantCard: 'grey' | 'transparent'
}

export const BigCard: FC<PropTypesBigCard> = ({ firstTitle, secondTitle, variantCard, children, ...props }) => {
    return (
        <Container
            { ...props }
            variantCard = { variantCard }>
            <Card
                variantCard = { variantCard }>
                <CardTitle variantCard = { variantCard }>{firstTitle}</CardTitle>
                <CardSubtitle variantCard = { variantCard }>{secondTitle}</CardSubtitle>
            </Card>
            <CardText
                variantCard = { variantCard }>
                {children}
            </CardText>
        </Container>
    );
};
