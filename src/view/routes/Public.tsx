// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { book } from '.';

// Pages
import { About, Main, Portfolio, Services, Technologies } from '../pages';

export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:    book.pageOne,
            element: <Main />,
        },
        {
            path:    book.pageTwo,
            element: <About />,
        },
        {
            path:    book.pageThree,
            element: <Services />,
        },
        {
            path:    book.pageFour,
            element: <Technologies />,
        },
        {
            path:    book.pageFive,
            element: <Portfolio />,
        },
        //todo
        // {
        //     path:    book.pageSix,
        //     element: <Vacancies />,
        // },
        { path: '*', element: <Navigate to = { book.pageOne } /> },
    ]);

    return routes;
};
