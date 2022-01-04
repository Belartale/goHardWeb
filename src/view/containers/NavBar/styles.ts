// Core
import { styled, Slide, Drawer } from '@mui/material';

export const MySlide = styled(Slide, {})(({ theme }) => ({
    backgroundColor: theme.colors.secondary[ 100 ],
    boxShadow:       '0px 4px 6px rgba(180, 180, 180, 0.16)', // #B4B4B4
}));

export const MyDrawer = styled(Drawer, {})(({ theme }) => ({
    '.MuiDrawer-paperAnchorLeft': {
        backgroundColor: theme.colors.secondary[ 100 ],
    },
}));
