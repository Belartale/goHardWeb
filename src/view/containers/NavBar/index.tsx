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
            target: window ? window() : void 0,
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
                                onClick = { () => void setIsOpenDrawer(true) }>
                                <IconDrawer>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </IconDrawer>
                            </IconButton>
                            <MyDrawer
                                anchor = { 'top' }
                                open = { isOpenDrawer }
                                onClose = { () => void setIsOpenDrawer(false) }>
                                <Box
                                    role = 'presentation'
                                    sx = {{ '& button': { margin: '0 auto' }}}
                                    onClick = { () => void setIsOpenDrawer(false) }
                                    onKeyDown = { () => void setIsOpenDrawer(false) }>
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
