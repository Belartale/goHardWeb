// Core
import React, { FC } from 'react';
import { List, ListItem } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

// Elements
import { MenuLink } from '../../elements';


// Styles
// import { MyListItemText } from './styles';

// Types
type PropTypes = {
    position?: 'row' | 'column';
}

export const Nav: FC<PropTypes> = ({ position }) => {
    const { push } = useHistory();

    return (
        <List
            disablePadding
            sx = {{ display: 'flex', flexDirection: position }}>
            <ListItem>
                <MenuLink
                    href = '/'
                    push = { push }>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/about-us'
                    push = { push }>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/our-services'
                    push = { push }>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/technologies'
                    push = { push }>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/portfolio'
                    push = { push }>
                    Portfolio
                </MenuLink>
            </ListItem>
        </List>
    );
};
