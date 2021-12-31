// Core
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import { MyListItemText } from './styles';

// Types
type PropTypes = {
    position?: 'row' | 'column';
}

export const Nav: FC<PropTypes> = ({ position }) => {
    return (
        <List
            disablePadding
            sx = {{ display: 'flex', flexDirection: position }}>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/'>
                    <MyListItemText
                        primary = 'Company'
                    />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/about'>
                    <MyListItemText primary = 'About_us' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/services'>
                    <MyListItemText
                        primary = 'Your_Services'
                    />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/technologies'>
                    <MyListItemText primary = 'Technologies' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    component = 'a'
                    href = '/portfolio'>
                    <MyListItemText primary = 'Portfolio' />
                </ListItemButton>
            </ListItem>
        </List>
    );
};
