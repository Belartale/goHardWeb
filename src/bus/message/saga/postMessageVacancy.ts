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
export const postMessageVacancyAction = createAction<MessageVacancy>(`${sliceName}/POST_MESSAGES_ASYNC`);

// Types
import { MessageVacancy } from '../types';

// Saga
const postMessageVacancy = (callAction: ReturnType<typeof postMessageVacancyAction>) => makeRequest<MessageVacancy>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/message/postMessageVacancy`, {
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
export function* watchPostMessageVacancy(): SagaIterator {
    yield takeLatest(postMessageVacancyAction.type, postMessageVacancy);
}
