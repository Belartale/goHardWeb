// Core
import React, { FC } from 'react';
import { ListItem, ListProps } from '@mui/material';

// Navigation
import { book } from '../../routes';

// Elements
import { MenuLink } from '../../elements';

// Styles
import { MyList } from './styles';

// Types
export interface PropTypesNav extends ListProps {
    fontSize: 'sm' | 'lg'
}

export const Nav: FC<PropTypesNav> = ({ fontSize, ...props }) => {
    return (
        <MyList
            fontSize = { fontSize }
            { ...props }
            disablePadding>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    to = { book.pageOne }>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    to = { book.pageTwo }>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    to = { book.pageThree }>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    to = { book.pageFour }>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    to = { book.pageFive }>
                    Portfolio
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    to = { book.pageSix }>
                    Vacancies
                </MenuLink>
            </ListItem>
        </MyList>
    );
};
