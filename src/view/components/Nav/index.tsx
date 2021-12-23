// Core
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
// import * as S from './styles';

// Types
type PropTypes = {
    position?: 'row' | 'column';
}

export const Nav: FC<PropTypes> = ({ position }) => {
    return (
        <List
            disablePadding
            sx = {{ display: 'flex', flexWrap: 'nowrap', flexDirection: position  }}>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/'>
                    <ListItemText
                        primary = 'Company'
                    />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/about'>
                    <ListItemText primary = 'About_us' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/services'>
                    <ListItemText
                        primary = 'Your_Services'
                    />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/technologies'>
                    <ListItemText primary = 'Technologies' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/portfolio'>
                    <ListItemText primary = 'Portfolio' />
                </ListItemButton>
            </ListItem>
        </List>
    );
};
