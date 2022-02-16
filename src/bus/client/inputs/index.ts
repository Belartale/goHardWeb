// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    firstNameFeedback: {
        value:      '',
        isValidate: true,
    },
    lastNameFeedback: {
        value:      '',
        isValidate: true,
    },
    emailFeedback: {
        value:      '',
        isValidate: true,
    },
    textFeedback: {
        value:      '',
        isValidate: true,
    },

    firstNameVacancy: {
        value:      '',
        isValidate: true,
    },
    lastNameVacancy: {
        value:      '',
        isValidate: true,
    },
    emailVacancy: {
        value:      '',
        isValidate: true,
    },
    textVacancy: {
        value:      '',
        isValidate: true,
    },
    selectVacancy: {
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

    const checkValidationFeedbackFormFun = (): boolean => [
        inputs.firstNameFeedback,
        inputs.lastNameFeedback,
        inputs.emailFeedback,
        inputs.textFeedback,
    ].every((element) => element.isValidate === true && element.value.length > 0);

    const checkValidationVacanciesFormFun = (): boolean => [
        inputs.firstNameVacancy.isValidate,
        inputs.lastNameVacancy.isValidate,
        inputs.emailVacancy.isValidate,
        inputs.textVacancy.isValidate,
    ].every((element) => element === true);

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

