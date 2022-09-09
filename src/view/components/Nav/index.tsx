// Core
import React, { FC } from 'react';
import { ListItem, ListProps } from '@mui/material';

// Navigation
import { book } from '../../routes';

// Elements
import { MenuLink } from '../../elements';

// Styles
import { MyList } from './styles';
import { useNavigate } from 'react-router-dom';

// Types
export interface PropTypesNav extends ListProps {
    fontSize: 'sm' | 'lg'
}

export const Nav: FC<PropTypesNav> = ({ fontSize, ...props }) => {
    let navigate = useNavigate();

    return (
        <MyList
            fontSize = { fontSize }
            { ...props }
            disablePadding>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    navigate = { navigate }
                    to = { book.pageOne }>
                    Company
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    navigate = { navigate }
                    to = { book.pageTwo }>
                    About us
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    navigate = { navigate }
                    to = { book.pageThree }>
                    Our services
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    navigate = { navigate }
                    to = { book.pageFour }>
                    Technologies
                </MenuLink>
            </ListItem>
            <ListItem>
                <MenuLink
                    fontSize = { fontSize }
                    navigate = { navigate }
                    to = { book.pageSix }>
                    Vacancies
                </MenuLink>
            </ListItem>
        </MyList>
    );
};
