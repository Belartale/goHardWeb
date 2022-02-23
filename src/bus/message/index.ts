// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Types
import { MessagePayloadAction } from './types';

// Actions
// import * as sagaActions from './saga/sagaActions';
import { messageActions } from './slice';

export const useMessage = () => {
    const dispatch = useDispatch();
    const message = useSelector(({ message }) => message); // Add message to ./src/init/redux/index.ts

    const checkValidationFeedbackFormFun = (): boolean => [ message.feedback.firstName ].every((element: string | null) => typeof element === 'string' && element.length > 0);

    return {
        message,
        setMessage: (
            options: MessagePayloadAction,
        ) => void dispatch(messageActions.setMessage(options)),

        checkValidationFeedbackForm: (): boolean => checkValidationFeedbackFormFun(),

        resetToInitialMessage: () => void dispatch(messageActions.resetToInitial()),
    };
};
