// Core
import React, { FC } from 'react';
import { Box } from '@mui/material';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { Footer, NavBar } from '../../containers';
import { Title } from '../../elements';

// Styles
// import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
};

const About: FC<PropTypes> = () => {
    return (
        <Box>
            <header>
                <Title>About us</Title>
            </header>
            <Footer />
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <About />
    </ErrorBoundary>
);
