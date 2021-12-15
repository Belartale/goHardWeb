// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    return (
        <Suspense fallback = { <Spinner /> }>
            <Public />
        </Suspense>
    );
};
