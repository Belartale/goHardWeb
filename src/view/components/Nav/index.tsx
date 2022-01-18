// Core
import React, { FC } from 'react';
import { ListItem, ListProps } from '@mui/material';
import { useHistory } from 'react-router-dom';

// Elements
import { MenuLink } from '../../elements';

// Styles
import { MyList } from './styled';

// Types
export interface PropTypesNav extends ListProps {
    fontSize: 'sm' | 'lg'
}

export const Nav: FC<PropTypesNav> = ({ fontSize, ...props }) => {
    const { push } = useHistory();

    return (
        <MyList
            fontSize = { fontSize }
            { ...props }
            disablePadding>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = '/'>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = '/about-us'>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = '/our-services'>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = '/technologies'>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = '/portfolio'>
                    Portfolio
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = '/vacancies'>
                    Vacancies
                </MenuLink>
            </ListItem>
        </MyList>
    );
};
