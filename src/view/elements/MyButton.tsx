// Core
import React, { FC } from 'react';
import { styled, ButtonUnstyled, ButtonUnstyledProps } from '@mui/material';
import { useHistory } from 'react-router-dom';

// Types
interface PropTypes extends ButtonUnstyledProps {
    typeButton: 'sm' | 'lg blur' | 'lg clear' | 'lg grey'
    href?: string
}

const ButtonStyled = styled(ButtonUnstyled, {})<PropTypes>`

    border: 1px solid ${({ theme }) => theme.colors.success[ 50 ]};
    font-family: 'Nunito';
    
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.success[ 100 ]};
    }
    &:focus {
        background-color: ${({ theme }) => theme.colors.success[ 100 ]};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.success[ 50 ]};
        color: ${({ theme }) => theme.colors.primary[ 50 ]};
    }

    ${({ typeButton }) => (typeButton === 'lg blur'
        || typeButton === 'lg clear'
        || typeButton === 'lg grey')
        && {
            minWidth:     '220px',
            padding:      '10px',
            borderRadius: '5px',
        }
}

    ${({ theme, typeButton }) => (typeButton === 'sm') && { fontSize: theme.fonts.size.fourth, borderRadius: '2px' }}
    ${({ theme, typeButton }) => (typeButton === 'lg grey')
    && {
        fontSize:   theme.fonts.size.fourth,
        fontWeight: 800,
    }}

    ${({ theme, typeButton }) => typeButton === 'lg blur'
        && {
            backdropFilter: 'blur(10px)',
            fontSize:       theme.fonts.size.fifth,
            fontWeight:     700,
        }
}

    ${({ typeButton }) => (typeButton === 'sm' || typeButton === 'lg clear' || typeButton === 'lg grey' || typeButton === 'lg blur')
        && { background: 'transparent' }
}
    ${({ theme, typeButton }) => (typeButton === 'sm' || typeButton === 'lg blur' || typeButton === 'lg grey')
        && { color: theme.colors.primary[ 50 ] }
}

    ${({ theme, typeButton }) => (typeButton === 'lg clear')
        && {
            color:      theme.colors.success[ 50 ],
            fontSize:   theme.fonts.size.eighth,
            fontWeight: 700,
        }
}

    ${({ typeButton }) => (typeButton === 'sm')
            && {
                padding:    '10px 30px',
                fontWeight: 800,
            }
}
`;


export const MyButton: FC<PropTypes> = ({ children, typeButton, href, ...props }) => {
    const { push } = useHistory();

    return (
        <ButtonStyled
            typeButton = { typeButton }
            onClick = { () => href && push(href) }
            { ...props }>
            {children}
        </ButtonStyled>
    );
};
