// Core
import * as React from 'react';
import { FC, useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
} from '@mui/material';

// Bus
// import {} from '../../../bus/'

import MenuIcon from '@mui/icons-material/Menu';

// Elements
import { Nav } from '../../components';

// Components
import { Logo } from '../../elements';


// Types
type PropTypes = {
    children?: React.ReactNode;
};

export const NavBar: FC<PropTypes> = () => {
    const [ state, setState ] = useState(false);

    const toggleDrawer
        = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown'
        // eslint-disable-next-line no-extra-parens
        && ((event as React.KeyboardEvent).key === 'Tab'
          // eslint-disable-next-line no-extra-parens
          || (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            // if (window.innerWidth > 900) {
            //     toggleDrawer(false);
            // }
            setState(isOpen);
        };

    return (
        <AppBar
            position = 'fixed'
            sx = {{ padding: 0 }}>
            <Toolbar
                sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx = {{ height: '91px', paddingBottom: '5px' }}>
                    <Typography
                        noWrap
                        component = 'div'
                        // sx = {{ mr: 2, display: { xs: 'none', md: 'block' }}}
                        variant = 'h1'>
                        <Logo />
                    </Typography>
                </Box>

                <Box>
                    <Box sx = {{ display: { xs: 'none', md: 'block' }}}>
                        <Nav />
                    </Box>

                    <IconButton
                        aria-label = 'menu'
                        color = 'inherit'
                        edge = 'start'
                        size = 'large'
                        sx = {{ mr: 2, display: { xs: 'block', md: 'none' }}}
                        onClick = { toggleDrawer(true) }>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor = 'left'
                        open = { state }
                        onClose = { toggleDrawer(false) }>
                        <Box
                            role = 'presentation'
                            sx = {{ width: 250 }}
                            onClick = { toggleDrawer(false) }
                            onKeyDown = { toggleDrawer(false) }>
                            <Nav />
                        </Box>
                    </Drawer>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

