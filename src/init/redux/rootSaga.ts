// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchMessage } from '../../bus/message/saga';

export function* rootSaga() {
    yield all([ watchMessage() ]);
}
