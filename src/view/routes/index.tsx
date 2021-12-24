// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';

// Elements
import { Spinner } from '../elements';

// Containers
import { NavBar } from '../containers';

export const Routes: FC = () => {
    return (
        <Suspense fallback = { <Spinner /> }>
            <NavBar />
            <Public />
        </Suspense>
    );
};
