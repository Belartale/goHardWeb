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
export const postMessageFeedbackAction = createAction<MessageFeedback>(`${sliceName}/POST_MESSAGES_ASYNC`);

// Types
import { MessageFeedback } from '../types';

// Saga
const postMessageFeedback = (callAction: ReturnType<typeof postMessageFeedbackAction>) => makeRequest<MessageFeedback>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/message/postMessageFeedback`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messageActions.resetToInitial());
    },
});

// Watcher
export function* watchPostMessageFeedback(): SagaIterator {
    yield takeLatest(postMessageFeedbackAction.type, postMessageFeedback);
}
