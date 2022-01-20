// Core
import { styled, Typography } from '@mui/material';

export const TitleTechnologies = styled(Typography, {})(({ theme }) => ({
    marginBottom: '25px',

    fontFamily: 'Nunito',
    fontWeight: 400,
    color:      theme.colors.primary[ 50 ],
    textAlign:  'center',

    '& span': {
        fontWeight: 700,
    },
}));
