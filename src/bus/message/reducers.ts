// Types
import { initialState } from './slice';
import * as types from './types';

export const setMessage: types.SetMessageContract = (state, action) => ({
    ...state,
    [ action.payload.type ]: action.payload.value,
});

export const resetToInitial = () => initialState;
