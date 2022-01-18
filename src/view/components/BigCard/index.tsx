// Core
import React, { FC, ReactElement } from 'react';
import { GridProps } from '@mui/material';

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
                {variantCard === 'grey' ? (<CardTitle variantCard = { variantCard }>{firstTitle}</CardTitle>)
                    : firstTitle
                }
                <CardSubtitle variantCard = { variantCard }>{secondTitle}</CardSubtitle>
            </Card>
            <CardText
                variantCard = { variantCard }>
                {children}
            </CardText>
        </Container>
    );
};
