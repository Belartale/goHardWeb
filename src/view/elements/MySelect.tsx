// Core
import React, { FC, forwardRef } from 'react';
import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    SelectProps,
    styled,
} from '@mui/material';

const InputLabelStyled = styled(InputLabel, {})`
    color: ${({ theme, error }) => error ? 'red' : theme.colors.grey[ 100 ] };
`;


const FormControlStyled  = styled(FormControl, {})(({ theme }) => ({
    '.MuiInputLabel-root': {
        color: theme.colors.grey[ 100 ],
    },

    '& label.Mui-focused': {
        color: theme.colors.primary[ 50 ],
    },
    '& .MuiSvgIcon-root': {
        color: theme.colors.primary[ 50 ],
    },
    '& .MuiOutlinedInput-root': {
        color: theme.colors.primary[ 50 ],

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
// Types
type Value = { value: string, text: string };
type Values = Array<Value>;
interface PropTypes extends SelectProps {
    values: Values
    nameSelect: string
}

export const MySelect: FC<PropTypes> = forwardRef(({ values, nameSelect, error, ...props }) => {
    return (
        <FormControlStyled
            fullWidth
            error = { error }>
            <InputLabelStyled
                error = { error }
                id = { `select-label-${nameSelect}` }>
                {nameSelect}
            </InputLabelStyled>
            <Select
                { ...props }
                id = { nameSelect }
                label = { nameSelect }
                labelId = { `select-label-${nameSelect}` }>
                {values.map((element: Value) => (
                    <MenuItem
                        key = { element.value }
                        value = { element.value }>{element.text}
                    </MenuItem>
                ))}
            </Select>
            {
                error && <FormHelperText>Field must be filled</FormHelperText>
            }
        </FormControlStyled>
    );
});
