// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector, useValidation } from '../../../tools/hooks';

const initialState = {
    feedback: {
        firstName: null,
        lastName:  null,
        email:     null,
        text:      null,
    },

    vacancy: {
        firstName: null,
        lastName:  null,
        email:     null,
        text:      null,
        select:    null,
    },
};
// typeof initialState.feedback | typeof initialState.vacancy |

// Types
export type InputsKeys = keyof typeof initialState;
export type InputsKeysKeys =
    Record<keyof typeof initialState.feedback, null | string> |
    Record<keyof typeof initialState.vacancy, null | string>;
type Options = { type: InputsKeys, value: InputsKeysKeys };

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
    const { validationInput } = useValidation();

    const checkValidationFeedbackFormFun = (): boolean => [
        validationInput({ type: 'text', value: inputs.feedback.firstName }),
        validationInput({ type: 'text', value: inputs.feedback.lastName }),
        validationInput({ type: 'email', value: inputs.feedback.email }),
        validationInput({ type: 'text', value: inputs.feedback.text }),
    ].every((element: boolean) => element === false);

    const checkValidationVacanciesFormFun = (): boolean => [
        validationInput({ type: 'text', value: inputs.vacancy.firstName }),
        validationInput({ type: 'text', value: inputs.vacancy.lastName }),
        validationInput({ type: 'email', value: inputs.vacancy.email }),
        validationInput({ type: 'text', value: inputs.vacancy.text }),
        validationInput({ type: 'text', value: inputs.vacancy.select }),
    ].every((element: boolean) => element === false);

    return {
        inputsRedux:                  inputs,
        setInputAction:               (options: Options) => void dispatch(inputsActions.inputCreatorAction(options)),
        checkValidationFeedbackForm:  (): boolean => checkValidationFeedbackFormFun(),
        checkValidationVacanciesForm: (): boolean => checkValidationVacanciesFormFun(),
        resetInputsToInitial:         () => void dispatch(inputsActions.resetInputsToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const inputCreatorAction = inputsActions.inputCreatorAction;

