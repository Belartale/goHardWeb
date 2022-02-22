// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

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

    return {
        inputsRedux:          inputs,
        setInputAction:       (options: Options) => void dispatch(inputsActions.inputCreatorAction(options)),
        resetInputsToInitial: () => void dispatch(inputsActions.resetInputsToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const inputCreatorAction = inputsActions.inputCreatorAction;

