// Core
import React, { FC } from 'react';
import { styled, ButtonUnstyled, ButtonUnstyledProps } from '@mui/material';
import { useHistory } from 'react-router-dom';

// Types
interface PropTypes extends ButtonUnstyledProps {
    typebutton: 'sm' | 'lg blur' | 'lg clear' | 'lg grey'
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

    ${({ typebutton }) => (typebutton === 'lg blur'
        || typebutton === 'lg clear'
        || typebutton === 'lg grey')
        && {
            minWidth:     '220px',
            padding:      '10px',
            borderRadius: '5px',
        }
}

    ${({ theme, typebutton }) => (typebutton === 'sm') && { fontSize: theme.fonts.size[400], borderRadius: '2px' }}
    ${({ theme, typebutton }) => (typebutton === 'lg grey')
    && {
        fontSize:   theme.fonts.size[400],
        fontWeight: 800,
    }}

    ${({ theme, typebutton }) => typebutton === 'lg blur'
        && {
            backdropFilter: 'blur(10px)',
            fontSize:       theme.fonts.size[500],
            fontWeight:     700,
        }
}

    ${({ typebutton }) => (typebutton === 'sm' || typebutton === 'lg clear' || typebutton === 'lg grey' || typebutton === 'lg blur')
        && { background: 'transparent' }
}
    ${({ theme, typebutton }) => (typebutton === 'sm' || typebutton === 'lg blur' || typebutton === 'lg grey')
        && { color: theme.colors.primary[ 50 ] }
}

    ${({ theme, typebutton }) => (typebutton === 'lg clear')
        && {
            color:      theme.colors.success[ 50 ],
            fontSize:   theme.fonts.size[800],
            fontWeight: 700,
        }
}

    ${({ typebutton }) => (typebutton === 'sm')
            && {
                padding:    '10px 30px',
                fontWeight: 800,
            }
}
`;


export const MyButton: FC<PropTypes> = ({ children, typebutton, href, ...props }) => {
    const { push } = useHistory();

    return (
        <ButtonStyled
            typebutton = { typebutton }
            onClick = { () => href && push(href) }
            { ...props }>
            {children}
        </ButtonStyled>
    );
};
