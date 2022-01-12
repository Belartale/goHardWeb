// Core
import React, { FC } from 'react';
import { styled, ButtonUnstyled } from '@mui/material';

// Types
type PropTypes = {
    typeButton: 'sm' | 'lg blur' | 'lg clear' | 'lg grey'
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
    ${({ theme, typeButton }) => (typeButton === 'lg grey') && { fontSize: theme.fonts.size.fourth }}

    ${({ theme, typeButton }) => typeButton === 'lg blur'
        && {
            //todo backgroundFilter
            backgroundFilter: 'blur("10px")',
            fontSize:         theme.fonts.size.fifth,
        }
}

    ${({ typeButton }) => (typeButton === 'sm' || typeButton === 'lg clear' || typeButton === 'lg grey' || typeButton === 'lg blur')
        && { background: 'transparent' }
}
    ${({ theme, typeButton }) => (typeButton === 'sm' || typeButton === 'lg blur' || typeButton === 'lg grey')
        && { color: theme.colors.primary[ 50 ] }
}

    ${({ theme, typeButton }) => (typeButton === 'lg clear')
        && { color: theme.colors.success[ 50 ], fontSize: theme.fonts.size.eighth }
}

    ${({ typeButton }) => (typeButton === 'sm')
            && { padding: '10px 30px' }
}
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


// // Core
// import React, { FC } from 'react';
// import { styled, ButtonUnstyled } from '@mui/material';

// // Types
// type PropTypes = {
//     typeButton: 'sm' | 'lg blur' | 'lg clear' | 'lg grey'
// }

// const ButtonStyled = styled(ButtonUnstyled, {})<PropTypes>`

//     border: 1px solid ${({ theme }) => theme.colors.success[ 50 ]};
//     font-family: 'Nunito';

//     &:hover {
//         cursor: pointer;
//         background-color: ${({ theme }) => theme.colors.success[ 100 ]};
//     }
//     &:focus {
//         background-color: ${({ theme }) => theme.colors.success[ 100 ]};
//     }
//     &:active {
//         background-color: ${({ theme }) => theme.colors.success[ 50 ]};
//     }

//     ${({ typeButton }) => (typeButton === 'lg blur'
//         || typeButton === 'lg clear'
//         || typeButton === 'lg grey')
//         && {
//             minWidth:     '220px',
//             padding:      '10px',
//             borderRadius: '5px',
//         }
// }

//     ${({ theme, typeButton }) => (typeButton === 'sm') && { fontSize: theme.fonts.size.fourth, borderRadius: '2px' }}
//     ${({ theme, typeButton }) => (typeButton === 'lg grey') && { fontSize: theme.fonts.size.fourth }}

//     ${({ theme, typeButton }) => typeButton === 'lg blur'
//         && {
//             //todo backgroundFilter
//             backgroundFilter: 'blur("10px")',
//             fontSize:         theme.fonts.size.fifth,
//         }
// }

//     ${({ typeButton }) => (typeButton === 'sm' || typeButton === 'lg clear' || typeButton === 'lg grey' || typeButton === 'lg blur')
//         && { background: 'transparent' }
// }
//     ${({ theme, typeButton }) => (typeButton === 'sm' || typeButton === 'lg blur' || typeButton === 'lg grey')
//         && { color: theme.colors.primary[ 50 ] }
// }

//     ${({ theme, typeButton }) => (typeButton === 'lg clear')
//         && { color: theme.colors.success[ 50 ], fontSize: theme.fonts.size.eighth }
// }

//     ${({ typeButton }) => (typeButton === 'sm')
//             && { padding: '10px 30px' }
// }
// `;


// export const MyButton: FC<PropTypes> = ({ children, typeButton, ...props }) => {
//     return (
//         <ButtonStyled
//             typeButton = { typeButton }
//             onClick = { () => console.log('Button') }
//             { ...props }>
//             {children}
//         </ButtonStyled>
//     );
// };
