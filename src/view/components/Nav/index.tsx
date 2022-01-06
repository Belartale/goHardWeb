// Core
import React, { FC } from 'react';
import { List, ListItem } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

// Elements
import { MenuLink } from '../../elements';

// Bus
// import {} from '../../../bus/'

// Styles
// import { MyListItemText } from './styles';

// Types
type PropTypes = {
    position?: 'row' | 'column';
}

export const Nav: FC<PropTypes> = ({ position }) => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    return (
        <List
            disablePadding
            sx = {{ display: 'flex', flexDirection: position }}>
            <ListItem>
                <MenuLink
                    href = '/'
                    pathname = { pathname }
                    push = { push }>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/about-us'
                    pathname = { pathname }
                    push = { push }>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/our-services'
                    pathname = { pathname }
                    push = { push }>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/technologies'
                    pathname = { pathname }
                    push = { push }>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    href = '/portfolio'
                    pathname = { pathname }
                    push = { push }>
                    Portfolio
                </MenuLink>
            </ListItem>
        </List>
    );
};
