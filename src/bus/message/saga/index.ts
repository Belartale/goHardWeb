// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { postMessageFeedbackAction, watchPostMessageFeedback } from './postMessageFeedback';
import { postMessageVacancyAction, watchPostMessageVacancy } from './postMessageVacancy';

// Types
import { MessageFeedback, MessageVacancy } from '../types';

export const useMessageSaga = () => {
    const dispatch = useDispatch();

    return {
        postMessageFeedback: (payload: MessageFeedback) => void dispatch(postMessageFeedbackAction(payload)),
        postMessageVacancy:  (payload: MessageVacancy) => void dispatch(postMessageVacancyAction(payload)),
    };
};

export function* watchMessage(): SagaIterator {
    yield all([ call(watchPostMessageFeedback), call(watchPostMessageVacancy) ]);
}
