// Core

import { styled, Typography } from '@mui/material';

export const MyTypography = styled(Typography, {})(({ theme }) => ({
    fontSize:   theme.fonts.size.fourth,
    color:      theme.colors.primary[ 50 ],
    fontFamily: 'Nunito',
}));
