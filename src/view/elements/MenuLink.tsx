// Core
import React, { FC } from 'react';
import { styled  } from '@mui/material';
// import styled from 'styled-components';

interface TypeProps {
    push: any
    href: string
}

export const Container = styled('button', { name: 'ListItemButton' })(({ theme }) => ({
    border:     'none',
    background: 'none',

    color:      theme.colors.primary[ 50 ],
    position:   'relative',
    fontSize:   theme.fonts.size.third,
    fontFamily: 'Nunito',
    whiteSpace: 'nowrap',
    cursor:     'pointer',

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

export const MenuLink: FC<TypeProps> = ({ children, push, href }) => {
    return (
        <Container
            onClick = { () => push(href) }>
            {children}
        </Container>
    );
};
