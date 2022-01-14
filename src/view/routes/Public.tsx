// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { About, Main, Portfolio, Services, Technologies } from '../pages';

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
                path = '/about-us'>
                <About />
            </Route>

            <Route
                exact
                path = '/our-services'>
                <Services />
            </Route>

            <Route
                exact
                path = '/technologies'>
                <Technologies />
            </Route>

            <Route
                exact
                path = '/portfolio'>
                <Portfolio />
            </Route>
            <Route
                exact
                path = '/vacancies'>
                <Portfolio />
            </Route>

            <Redirect to = '/' />
        </Switch>
    );
};
