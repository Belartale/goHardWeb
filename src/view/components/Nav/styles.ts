// Core
import { styled, ListItemText  } from '@mui/material';

export const MyListItemText = styled(ListItemText, { name: 'ListItemButton' })(() => ({
    // '.MuiListItemText-primary': {
    //     color:      theme.colors.primary[ 50 ],
    //     position:   'relative',
    //     fontSize:   theme.fonts.third,
    //     fontFamily: 'Nunito',

    //     '::before': {
    //         content:         '""',
    //         position:        'absolute',
    //         left:            '0',
    //         bottom:          '-5px',
    //         width:           0,
    //         height:          '1px',
    //         backgroundColor: theme.colors.success[ 50 ],
    //         transition:      'width 0.3s',
    //     },

    //     ':hover:before': {
    //         width: '100%',
    //     },

    //     transition: 'all 0.3s',
    //     ':hover':   {
    //         color: theme.colors.success[ 50 ],
    //     },
    // },
}));
