// Core
import { styled, Box, Typography } from '@mui/material';

export const Container = styled(Box, {})(({ theme }) => ({
    padding:   '25px 0px',
    borderTop: `1px solid ${theme.colors.grey[ 100 ]}`,
}));

export const BoxWithTopBorder = styled(Box, {})(({ theme }) => ({
    marginTop: '20px',
    padding:   '15px 0px',
    borderTop: `1px solid ${theme.colors.grey[ 100 ]}`,
    width:     '100%',
}));


export const MyTypographyParagraph  = styled(Typography, {})(({ theme }) => ({
    padding:    '15px 0px',
    width:      '100%',
    fontSize:   theme.fonts.size[ 200 ],
    fontFamily: 'Nunito',
    fontWeight: 300,
    color:      theme.colors.grey[ 50 ],

    [ theme.breakpoints.down('md') ]: {
        '&': {
            textAlign: 'center',
        },
    },
}));

