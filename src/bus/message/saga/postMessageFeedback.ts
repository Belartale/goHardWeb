// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const postMessageFeedbackAction = createAction<MessageFeedback>(`${sliceName}/POST_MESSAGES_FEEDBACK_ASYNC`);

// Types
import { MessageFeedback } from '../types';

// Saga
const postMessageFeedback = (callAction: ReturnType<typeof postMessageFeedbackAction>) => {
    console.log('some text');

    return makeRequest<MessageFeedback>({
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
        togglerType: 'isPostForm',
    });
};

// Watcher
export function* watchPostMessageFeedback(): SagaIterator {
    yield takeLatest(postMessageFeedbackAction.type, postMessageFeedback);
}
