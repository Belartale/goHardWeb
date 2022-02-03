// Types
import * as types from './types';

export const setMessage: types.SetMessageContract = (__, action) => {
    return action.payload;
};
