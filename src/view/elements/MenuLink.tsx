// Core
import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { styled  } from '@mui/material';

// Components
import { PropTypesNav } from '../components';

// Routers
import { book } from '../routes';

// Types
interface TypeProps extends NavLinkProps {
    fontSize: PropTypesNav['fontSize']
    to: book
}

interface TypePropsContainer {
    fontSize: TypeProps['fontSize']
}

const ContainerBox = styled('div', {})<TypePropsContainer>(({ theme, fontSize }) => ({
    margin:             '0 auto',
    '.isActiveNavLink': {
        color:       theme.colors.success[ 50 ],
        '&::before': {
            content:         '""',
            position:        'absolute',
            left:            '0',
            bottom:          '-5px',
            width:           '100%',
            height:          '1px',
            backgroundColor: theme.colors.success[ 50 ],
        },
    },

    '& a': {
        border:     'none',
        background: 'none',

        color:      theme.colors.primary[ 50 ],
        position:   'relative',
        fontSize:   fontSize === 'sm' ? theme.fonts.size[ 200 ] : theme.fonts.size[ 800 ],
        fontFamily: 'Nunito',
        fontWeight: 700,
        whiteSpace: 'nowrap',
        cursor:     'pointer',

        textDecoration: 'none',

        '::before': {
            content:         '""',
            position:        'absolute',
            left:            '0',
            bottom:          '-5px',
            width:           0,
            height:          '1px',
            backgroundColor: theme.colors.success[ 50 ],
            transition:      'width 0.3s',
        },

        ':hover:before': {
            width: '100%',
        },

        transition: 'all 0.3s',
        ':hover':   {
            color: theme.colors.success[ 50 ],
        },
    },
}));

export const MenuLink: FC<TypeProps> = ({ children, to, fontSize }) => {
    return (
        <ContainerBox
            fontSize = { fontSize }>
            <NavLink
                className = { ({ isActive }) => isActive ? 'isActiveNavLink' : '' }
                to = { to }>
                {children}
            </NavLink>
        </ContainerBox>
    );
};
