// Core
import { Grid } from '@mui/material';
import React, { FC } from 'react';

// Styles
import { MyTypography } from './styles';

// Types
export type PropTypes = {
    text: string
    varianttext?: 'green'
}

export const SmallCard: FC<PropTypes> = ({ children, text, varianttext }) => {
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
            </Grid>
        </Grid>
    );
};
