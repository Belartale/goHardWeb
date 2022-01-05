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
            <ListItem disablePadding>
                <MenuLink/>
            </ListItem>
        </List>
    );
};
