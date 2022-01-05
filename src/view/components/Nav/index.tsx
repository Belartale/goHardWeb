// Core
import React, { FC } from 'react';
import { List, ListItem } from '@mui/material';
// import { useHistory, useLocation } from 'react-router-dom';

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
    // const { push } = useHistory();
    // const { pathname } = useLocation();


    // const changeUrl: void = () => {

    // };

    return (
        <List
            disablePadding
            sx = {{ display: 'flex', flexDirection: position }}>
            {/* <ListItem disablePadding>
                <MenuLink
                    selected
                    href = '/'
                    text = 'Company'
                />
            </ListItem> */}
            {/* <ListItem disablePadding>
                <MenuLink
                    href = '/about-us'
                    selected = { false }
                    text = 'About us'
                />
            </ListItem>
            <ListItem disablePadding>
                <MenuLink
                    href = '/our-services'
                    selected = { false }
                    text = 'Our services'
                />
            </ListItem>
            <ListItem disablePadding>
                <MenuLink
                    href = '/technologies'
                    selected = { false }
                    text = 'Technologies'
                />
            </ListItem>
            <ListItem disablePadding>
                <MenuLink
                    href = '/portfolio'
                    selected = { false }
                    text = 'Portfolio'
                />
            </ListItem> */}
        </List>
    );
};
