// Core
import React, { FC, ReactElement } from 'react';
import { GridProps } from '@mui/material';

// Styles
import {
    Container,
    Card,
    FirstTitle,
    SecondTitle,
    CardText,
} from './styles';

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
                {variantCard === 'grey'
                    ? (
                        <FirstTitle
                            variantCard = { variantCard }>
                            {firstTitle}
                        </FirstTitle>
                    )
                    : firstTitle
                }
                <SecondTitle variantCard = { variantCard }>{secondTitle}</SecondTitle>
            </Card>
            <CardText
                variantCard = { variantCard }>
                {children}
            </CardText>
        </Container>
    );
};
