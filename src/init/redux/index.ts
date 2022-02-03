// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import inputs from '../../bus/client/inputs';
import message from '../../bus/message/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        inputs,
        message,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
