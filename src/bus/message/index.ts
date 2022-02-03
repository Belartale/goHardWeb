// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Types
import { Message } from './types';

// Actions
// import * as sagaActions from './saga/sagaActions';
import { messageActions } from './slice';

export const useMessage = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.message); // Add message to ./src/init/redux/index.ts

    // useEffect(() => {
    //     dispatch(sagaActions.fetchMessageAction('any payload'));
    // }, []);

    return {
        message,
        setMessage: (
            payload: any,
        ) => void dispatch(messageActions.setMessage({ ...payload })),
    };
};
