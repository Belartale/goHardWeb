// Core
import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { styled  } from '@mui/material';

// Components
import { PropTypesNav } from '../components';

// Types
interface TypeProps extends NavLinkProps {
    push: Function
    fontSize: PropTypesNav['fontSize']
}

type TypePropsContainer = {
    fontSize: TypeProps['fontSize']
}


export const Container = styled(NavLink, { name: 'ListItemButton' })<TypePropsContainer>(({ theme, fontSize }) => ({
    border:     'none',
    background: 'none',

    color:      theme.colors.primary[ 50 ],
    position:   'relative',
    fontSize:   fontSize === 'sm' ? theme.fonts.size.third : theme.fonts.size.eighth,
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

}));

const ContainerBox = styled('div', {})(({ theme }) => ({
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
}));

export const MenuLink: FC<TypeProps> = ({ children, push, to, fontSize }) => {
    return (
        <ContainerBox>
            <Container
                exact
                activeClassName = 'isActiveNavLink'
                fontSize = { fontSize }
                to = { to }
                onClick = { () => push(to) }>
                {children}
            </Container>
        </ContainerBox>
    );
};
