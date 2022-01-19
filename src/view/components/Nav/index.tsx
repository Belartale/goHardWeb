// Core
import React, { FC } from 'react';
import { ListItem, ListProps } from '@mui/material';
import { useHistory } from 'react-router-dom';

// Navigation
import { book } from '../../routes';

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
                    to = { book.pageOne }>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = { book.pageTwo }>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = { book.pageThree }>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = { book.pageFour }>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = { book.pageFive }>
                    Portfolio
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    push = { push }
                    to = { book.pageSix }>
                    Vacancies
                </MenuLink>
            </ListItem>
        </MyList>
    );
};
