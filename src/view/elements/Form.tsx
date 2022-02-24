// Core
import React, { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

// Types
interface FormTypes extends BoxProps {
    isValidateForm: boolean
}

export const FormStyled = styled(Box, {})<FormTypes>`
    padding: 15px 30px;
    border: 1px solid ${({ theme, isValidateForm }) => isValidateForm === true ? theme.colors.primary[ 50 ] : theme.colors.error};
    border-radius: 5px;

    width: auto;
`;

export const Form: FC<FormTypes> = ({ children, ...props }) => {
    return (
        <FormStyled { ...props }>
            {children}
        </FormStyled>
    );
};

