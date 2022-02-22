// Core
import React, { FC, forwardRef } from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';

const MyTextFieldStyled  = styled(TextField, {})<TextFieldProps>(({ theme }) => ({
    '.MuiInputLabel-root': {
        color: theme.colors.grey[ 100 ],
    },

    '& label.Mui-focused': {
        color: theme.colors.primary[ 50 ],
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.colors.primary[ 50 ],
    },
    '& .MuiOutlinedInput-root': {
        color:        theme.colors.primary[ 50 ],
        '& fieldset': {
            borderColor: theme.colors.grey[ 100 ],
        },
        '&:hover fieldset': {
            borderColor: theme.colors.grey[ 50 ],
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.colors.primary[ 50 ],
        },
    },
}));

export const MyTextField: FC<TextFieldProps> = forwardRef(({ children, ...props }, ref) => {
    return (
        <MyTextFieldStyled
            ref = { ref }
            { ...props }>
            {children}
        </MyTextFieldStyled>
    );
});

