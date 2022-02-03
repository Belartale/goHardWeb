// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { postMessageAction, watchPostMessage } from './postMessage';

// Types
import { Message } from '../types';

export const useMessageSaga = () => {
    const dispatch = useDispatch();

    return {
        postMessage: (payload: Message) => void dispatch(postMessageAction(payload)),
    };
};

export function* watchMessage(): SagaIterator {
    yield all([ call(watchPostMessage) ]);
}
