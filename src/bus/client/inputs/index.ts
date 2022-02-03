// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    firstName: {
        value:      '',
        isValidate: true,
    },
    lastName: {
        value:      '',
        isValidate: true,
    },
    email: {
        value:      '',
        isValidate: true,
    },
    text: {
        value:      '',
        isValidate: true,
    },
};

// Types
export type InputsKeys = keyof typeof initialState;
type Options = { type: InputsKeys, value: { value: string, isValidate: boolean } };

// Slice
export const inputsSlice = createSlice({
    name:     'inputs',
    initialState,
    reducers: {
        inputCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        resetInputsToInitialAction: () => initialState,
    },
});

// Interfaces
const inputsActions = inputsSlice.actions;
export default inputsSlice.reducer;

export const useInputsRedux = () => {
    const dispatch = useDispatch();
    const inputs = useSelector(({ inputs }) => inputs);

    const checkValidationFormFun = (): boolean => [
        inputs.firstName.isValidate,
        inputs.lastName.isValidate,
        inputs.email.isValidate,
        inputs.text.isValidate,
    ].every((element) => element === true);

    return {
        inputsRedux:          inputs,
        setInputAction:       (options: Options) => void dispatch(inputsActions.inputCreatorAction(options)),
        checkValidationForm:  (): boolean => checkValidationFormFun(),
        resetInputsToInitial: () => void dispatch(inputsActions.resetInputsToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const inputCreatorAction = inputsActions.inputCreatorAction;

