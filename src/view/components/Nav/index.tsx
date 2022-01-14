// Core
import React, { FC } from 'react';
import { List, ListItem, ListProps } from '@mui/material';
import { useHistory } from 'react-router-dom';

// Elements
import { MenuLink } from '../../elements';

// Types
interface PropTypes extends ListProps {
}

export const Nav: FC<PropTypes> = ({ ...props }) => {
    const { push } = useHistory();

    return (
        <List
            { ...props }
            disablePadding>
            <ListItem>
                <MenuLink
                    push = { push }
                    to = '/'>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    push = { push }
                    to = '/about-us'>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    push = { push }
                    to = '/our-services'>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    push = { push }
                    to = '/technologies'>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    push = { push }
                    to = '/portfolio'>
                    Portfolio
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    push = { push }
                    to = '/vacancies'>
                    Vacancies
                </MenuLink>
            </ListItem>
        </List>
    );
};
