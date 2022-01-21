// Core
import {
    Box,
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';

// Types
interface PropsTypes extends TypographyProps {
    fontSize?: string
}

export const CardBox = styled(Box, {})(({ theme }) => ({
    padding:          '15px',
    background:       'none',
    backgroundFilter: 'blur(100px)',
    border:           `1px solid ${theme.colors.primary[ 50 ]}`,
    borderRadius:     '5px',
    width:            '130px',
    minHeight:        '130px',

    backdropFilter: 'blur(10px)',

    ':hover': {
        borderColor:                         `${theme.colors.success[ 50 ]}`,
        '.MuiTypography-root, .MuiBox-root': {
            color: `${theme.colors.success[ 50 ]}`,
        },
    },
    [ '@media (min-width: 1200px)' ]: {
        width: '110px',
    },
    [ '@media (min-width: 1400px)' ]: {
        width: '130px',
    },
}));

export const Title = styled(Box, {})(({ theme }) => ({
    textAlign:  'center',
    fontSize:   theme.fonts.size.A300,
    fontFamily: 'Nunito',
    fontWeight: 400,
    color:      theme.colors.primary[ 50 ],
}));

export const Text = styled(Typography, {})<PropsTypes>(({ theme, fontSize }) => ({
    textAlign:  'center',
    fontSize:   fontSize ? fontSize : theme.fonts.size[100],
    fontFamily: 'Nunito',
    fontWeight: 700,
    lineHeight: fontSize ? theme.fonts.lineHeight[ 55 ] : theme.fonts.lineHeight[ 200 ],
    color:      theme.colors.primary[ 50 ],
}));
