// Core
import React, { FC } from 'react';

// Tools
// import { useOnScreen } from '../../../tools/hooks';

// Container
import { Footer } from '../../containers';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Title } from '../../elements';
import { Box } from '@mui/material';


// Styles
// import { Container } from './styles';

const Main: FC = () => {
    // const divRef = useRef(null);
    // const visible = useOnScreen(divRef, '0px');

    // console.log(process.env.APP_NAME);

    // return (
    //     <Container>
    //         <div ref = { divRef }>
    //             {visible ? 'visible' : 'hide'}
    //         </div>
    //     </Container>
    // );
    return (
        <Box>
            <header>
                <Title>
                    Main
                </Title>
            </header>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <h1>TEXt</h1>
            <Footer />
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
