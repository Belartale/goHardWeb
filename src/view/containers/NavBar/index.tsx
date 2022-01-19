// Core
import * as React from 'react';
import { FC, useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    useScrollTrigger,
} from '@mui/material';

// Container
import { MyContainer } from '..';

// Components
import { Nav } from '../../components';

// Elements
import { Logo } from '../../elements';

// Styles
import { IconDrawer, MyDrawer, MySlide } from './styles';

// Types
type PropTypes = {
    children?: React.ReactNode;
};

type PropsTypesHideOnScroll = {
    window?: () => Window;
    children: React.ReactElement;
};

export const NavBar: FC<PropTypes> = () => {
    function HideOnScroll(props: PropsTypesHideOnScroll) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            // eslint-disable-next-line no-undefined
            target: window ? window() : undefined,
        });

        return (
            <MySlide
                appear = { false }
                direction = 'down'
                in = { !trigger }>
                {children}
            </MySlide>
        );
    }

    const [ isOpenDrawer, setIsOpenDrawer ] = useState(false);

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

            //todo нужно ка-то скрыть <Drawer></Drawer> когда > 900
            if (window.innerWidth > 900) {
                toggleDrawer(false);
            }
            setIsOpenDrawer(isOpen);
        };

    return (
        <HideOnScroll>
            <AppBar
                position = 'fixed'>
                <MyContainer>
                    <Toolbar
                        disableGutters
                        sx = {{ display: 'flex', justifyContent: 'space-between' }}
                        variant = 'regular'>
                        <Box sx = {{ height: '96px' }}>
                            <Typography
                                component = 'div'
                                variant = 'h1'>
                                <Logo />
                            </Typography>
                        </Box>

                        <Box>
                            <Box sx = {{ display: { xs: 'none', md: 'block' }}}>
                                <Nav
                                    fontSize = 'sm'
                                    sx = {{ display: 'flex' }}
                                />
                            </Box>

                            <IconButton
                                aria-label = 'menu'
                                color = 'inherit'
                                edge = 'start'
                                size = 'large'
                                sx = {{ mr: 2, display: { xs: 'block', md: 'none' }}}
                                onClick = { toggleDrawer(true) }>
                                <IconDrawer>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </IconDrawer>
                            </IconButton>
                            <MyDrawer
                                anchor = { 'top' }
                                open = { isOpenDrawer }
                                onClose = { toggleDrawer(false) }>
                                <Box
                                    role = 'presentation'
                                    sx = {{ '& button': { margin: '0 auto' }}}
                                    onClick = { toggleDrawer(false) }
                                    onKeyDown = { toggleDrawer(false) }>
                                    <Nav
                                        fontSize = 'lg'
                                        sx = {{ display: 'flex', flexDirection: 'column' }}
                                    />
                                </Box>
                            </MyDrawer>
                        </Box>
                    </Toolbar>
                </MyContainer>
            </AppBar>
        </HideOnScroll>
    );
};
