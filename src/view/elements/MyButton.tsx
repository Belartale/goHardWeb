// Core
import React, { FC } from 'react';
import { styled, Button, ButtonProps, ButtonUnstyled } from '@mui/material';
import { type } from 'os';

// Types
type PropTypes = {
    typeButton: 'sm' | 'lg blur' | 'lg clear' | 'lg grey'
}

const ButtonStyled = styled(ButtonUnstyled, {})<PropTypes>`

    border: 1px solid ${({ theme }) => theme.colors.success[ 50 ]};
    font-family: 'Nunito';


${({ typeButton }) => (typeButton === 'lg blur'
    || typeButton === 'lg clear'
    || typeButton === 'lg grey')
    && {
        minWidth:     '220px',
        padding:      '10px',
        borderRadius: '5px',
    }
}

${({ typeButton }) => (typeButton === 'sm') && { borderRadius: '2px' }}

${({ typeButton }) => typeButton === 'lg blur'
    && {
        //todo backgroundFilter
        backgroundFilter: '10px',
    }
}

${({ typeButton }) => (typeButton === 'sm' || typeButton === 'lg clear' || typeButton === 'lg grey' || typeButton === 'lg blur')
    && { background: 'transparent' }
}
${({ theme, typeButton }) => (typeButton === 'sm' || typeButton === 'lg blur' || typeButton === 'lg grey')
    && { color: theme.colors.primary[ 50 ] }
}

${({ theme, typeButton }) => (typeButton === 'lg clear')
    && { color: theme.colors.success[ 50 ] }
}



/* ${({ typeButton }) => typeButton === 'sm'} */
`;


export const MyButton: FC<PropTypes> = ({ children, typeButton, ...props }) => {
    return (
        <ButtonStyled
            typeButton = { typeButton }
            onClick = { () => console.log('Button') }
            { ...props }>
            {children}
        </ButtonStyled>
    );
};
