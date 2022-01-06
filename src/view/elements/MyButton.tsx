// Core
import React, { FC } from 'react';
import { styled, Button, ButtonProps } from '@mui/material';

// Types
type PropTypes = {
    /* type props here */
    children: React.ReactNode | React.ReactNodeArray;
    sx?: object;
    type: string;
}

export const ButtonStyled = styled(Button, {})(({ theme }) => ({
    color:        theme.colors.primary[ 50 ],
    borderColor:  theme.colors.success[ 50 ],
    borderRadius: '5px',

    textTransform: 'none',
}));

export const MyButton: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <ButtonStyled
            color = 'success'
            { ...props }
            variant = 'outlined'>
            {children}
        </ButtonStyled>
    );
};
