// Core
import { Box, styled, Typography } from '@mui/material';


export const CardBox = styled(Box, {})(({ theme }) => ({
    padding:          '15px',
    background:       'none',
    backgroundFilter: 'blur(100px)',
    border:           `1px solid ${theme.colors.primary[ 50 ]}`,
    borderRadius:     '5px',
    //todo with / height
    width:            '130px',
    minHeight:        '130px',

    ':hover': {
        borderColor:                         `${theme.colors.success[ 50 ]}`,
        '.MuiTypography-root, .MuiBox-root': {
            color: `${theme.colors.success[ 50 ]}`,
        },
    },
}));

export const Title = styled(Box, {})(({ theme }) => ({
    textAlign:  'center',
    fontSize:   theme.fonts.size.eleventh,
    fontFamily: 'Nunito',
    color:      theme.colors.primary[ 50 ],
}));

export const Text = styled(Typography, {})(({ theme }) => ({
    textAlign:  'center',
    fontSize:   theme.fonts.size.second,
    fontFamily: 'Nunito',
    color:      theme.colors.primary[ 50 ],
}));
