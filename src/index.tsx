// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // TODO check import Router
import { Provider as ReduxProvider } from 'react-redux';

// Init
import {
    store as reduxStore,
    registerServiceWorker,
} from './init';

// View
import { App } from './view';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

const Root = () => {
    return (
        <ReduxProvider store = { reduxStore }>
            <Router>
                <App />
            </Router>
        </ReduxProvider>
    );
};

render(<Root />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    registerServiceWorker();
}
