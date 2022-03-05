// Core
import React, { FC } from 'react';
import { NavLinkProps, useLocation } from 'react-router-dom';
import { styled  } from '@mui/material';

// Components
import { PropTypesNav } from '../components';

// Routers
import { book } from '../routes';

// Types
interface TypeProps extends NavLinkProps {
    fontSize: PropTypesNav['fontSize']
    to: book
    navigate: Function
}

interface TypePropsContainer {
    fontSize: TypeProps['fontSize']
    isactive: string
}

const ContainerBox = styled('div', {})<TypePropsContainer>`
    margin: 0 auto;
    border: none;
    background: none;

    color: ${({ theme }) => theme.colors.primary[ 50 ]};
    position: relative;
    font-size: ${({ theme, fontSize }) => fontSize === 'sm' ? theme.fonts.size[ 200 ] : theme.fonts.size[ 800 ]};
    font-family: 'Nunito';
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;

    text-decoration: none;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.success[ 50 ]};
        transition: width 0.3s;
    }

    &:hover:before {
        width: 100%;
    }

    transition: all 0.3s;
    &:hover {
        color: ${({ theme }) => theme.colors.success[ 50 ]}
    }
    ${({ theme, isactive }) => isactive === 'true' && {
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
    } }
`;


export const MenuLink: FC<TypeProps> = ({ children, to, fontSize, navigate }) => {
    const { pathname } = useLocation();

    return (
        <ContainerBox
            fontSize = { fontSize }
            isactive = { (pathname === `${to}`).toString() }
            onClick = { () => {
                window.scrollTo({ top: 0, behavior: 'auto' });
                navigate(to);
            } }>
            {children}
        </ContainerBox>
    );
};
