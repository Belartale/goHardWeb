// Core
import { styled, Slide, Drawer, Box } from '@mui/material';

export const MySlide = styled(Slide, {})(({ theme }) => ({
    backgroundColor: theme.colors.secondary[ 100 ],
    boxShadow:       '0px 4px 6px rgba(180, 180, 180, 0.16)',
}));

export const MyDrawer = styled(Drawer, {})(({ theme }) => ({
    '.MuiDrawer-paper': {
        padding: '30px 0px',

        backgroundColor: theme.colors.secondary[ 100 ],
    },
}));

export const IconDrawer  = styled(Box, {})(({ theme }) => ({
    width:          '50px',
    height:         '30px',
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'flex-end',
    justifyContent: 'space-between',

    '& span': {
        borderRadius:    '15px',
        backgroundColor: theme.colors.primary[ 50 ],
    },

    '& span:nth-of-type(1)': {
        width:  '100%',
        height: '4px',
    },
    '& span:nth-of-type(2)': {
        width:  '60%',
        height: '4px',
    },
    '& span:nth-of-type(3)': {
        width:  '30%',
        height: '4px',
    },

}));
