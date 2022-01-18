// Core
import React, { FC } from 'react';
import { CardProps, Grid } from '@mui/material';

// Styles
import { CardBox, Text, Title } from './styles';

// Types
interface TypesProps extends CardProps {
    title: string,
    text: string,
    textSize?: string,
}

export const MyCardWithBlurBackground: FC<TypesProps> = ({ title, text, textSize, ...props }) => {
    return (
        <CardBox { ...props }>
            <Grid
                container
                direction = { 'column' }>
                <Grid item>
                    <Title>
                        {title}
                    </Title>
                </Grid>
                <Grid item>
                    <Text fontSize = { textSize }>
                        {text}
                    </Text>
                </Grid>
            </Grid>
        </CardBox>
    );
};
