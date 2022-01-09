// Core
import { Grid } from '@mui/material';
import React, { FC } from 'react';

// Styles
import { MyTypography } from './styles';

// Types
type PropTypes = {
    text: string
}

export const SmallCard: FC<PropTypes> = ({ children, text }) => {
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
                    variant = 'h3'>
                    {text}
                </MyTypography>
            </Grid>
        </Grid>
    );
};
