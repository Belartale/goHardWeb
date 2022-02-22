// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messageActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const postMessageFeedbackAction = createAction<Message>(`${sliceName}/POST_MESSAGES_ASYNC`);

// Types
import { Message } from '../types';

// Saga
const postMessageFeedback = (callAction: ReturnType<typeof postMessageFeedbackAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/message`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messageActions.setMessage(result));
    },
});

// Watcher
export function* watchPostMessage(): SagaIterator {
    yield takeLatest(postMessageFeedbackAction.type, postMessageFeedback);
}
