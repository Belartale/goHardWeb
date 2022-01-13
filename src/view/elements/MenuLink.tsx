// Core
import React, { FC } from 'react';
import { styled  } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface TypeProps extends NavLinkProps {
    push: Function
}


export const Container = styled(NavLink, { name: 'ListItemButton' })<NavLinkProps>(({ theme }) => ({
    border:     'none',
    background: 'none',

    color:      theme.colors.primary[ 50 ],
    position:   'relative',
    fontSize:   theme.fonts.size.third,
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

export const MenuLink: FC<TypeProps> = ({ children, push, to }) => {
    return (
        <ContainerBox>
            <Container
                exact
                activeClassName = 'isActiveNavLink'
                to = { to }
                onClick = { () => push(to) }>
                {children}
            </Container>
        </ContainerBox>
    );
};
