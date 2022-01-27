// Core
import { styled, Box, Typography, BoxProps, TextField, TextFieldProps } from '@mui/material';

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

export const Form  = styled(Box, {})<BoxProps>(({ theme }) => ({
    padding:      '15px 30px',
    border:       `1px solid ${theme.colors.primary[ 50 ]}`,
    borderRadius: '5px',

    width:                          'auto',
    [ theme.breakpoints.up('sm') ]: {
        '&': {
            width:  '60vw',
            margin: '0 auto',
        },
    },
    [ theme.breakpoints.up('md') ]: {
        '&': {
            width: 'auto',
        },
    },
}));

export const MyTextField  = styled(TextField, {})<TextFieldProps>(({ theme }) => ({
    '.MuiInputLabel-root': {
        color: theme.colors.grey[ 100 ],
    },

    '& label.Mui-focused': {
        color: theme.colors.primary[ 50 ],
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.colors.primary[ 50 ],
    },
    '& .MuiOutlinedInput-root': {
        color:        theme.colors.primary[ 50 ],
        '& fieldset': {
            borderColor: theme.colors.grey[ 100 ],
        },
        '&:hover fieldset': {
            borderColor: theme.colors.grey[ 50 ],
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.colors.primary[ 50 ],
        },
    },
}));

