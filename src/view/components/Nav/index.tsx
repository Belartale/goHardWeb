// Core
import React, { FC } from 'react';
import { List, ListItem, ListProps } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

// Elements
import { MenuLink } from '../../elements';


// Styles
// import { MyListItemText } from './styles';

// Types
interface PropTypes extends ListProps {
}

export const Nav: FC<PropTypes> = ({ ...props }) => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    return (
        <List
            { ...props }
            disablePadding>
            <ListItem>
                <MenuLink
                    pathname = { pathname }
                    push = { push }
                    to = '/'>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    pathname = { pathname }
                    push = { push }
                    to = '/about-us'>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    pathname = { pathname }
                    push = { push }
                    to = '/our-services'>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    pathname = { pathname }
                    push = { push }
                    to = '/technologies'>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    pathname = { pathname }
                    push = { push }
                    to = '/portfolio'>
                    Portfolio
                </MenuLink>
            </ListItem>
        </List>
    );
};
