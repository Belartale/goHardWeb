// Core
import React, { FC, Suspense } from 'react';

// Navigation
export * from './navigation';

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
