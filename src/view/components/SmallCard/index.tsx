// Core
import React, { FC } from 'react';
import { Grid } from '@mui/material';

// Styles
import { MyTypography } from './styles';

// Types
export type PropTypes = {
    text: string
    secondText?: string
    varianttext?: 'green'
}

export const SmallCard: FC<PropTypes> = ({ children, text, secondText, varianttext }) => {
    return (
        <Grid
            container
            direction = { 'column' }>
            <Grid
                item
                sx = {{ mb: '15px', display: 'flex', justifyContent: 'center' }}>
                {children}
            </Grid>
            <Grid item>
                <MyTypography
                    textAlign = { 'center' }
                    variant = 'h3'
                    varianttext = { varianttext }>
                    {text}
                </MyTypography>
                {secondText
                && (
                    <MyTypography
                        textAlign = { 'center' }
                        variant = 'h3'
                        varianttext = { varianttext }>
                        {secondText}
                    </MyTypography>
                )}
            </Grid>
        </Grid>
    );
};
