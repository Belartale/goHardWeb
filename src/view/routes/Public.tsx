// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main } from '../pages';

export const Public: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = '/'>
                <Main />
            </Route>

            <Route
                exact
                path = '/about'>
                <Main />
            </Route>

            <Route
                exact
                path = '/services'>
                <Main />
            </Route>

            <Route
                exact
                path = '/technologies'>
                <Main />
            </Route>

            <Route
                exact
                path = '/portfolio'>
                <Main />
            </Route>

            <Redirect to = '/' />
        </Switch>
    );
};
