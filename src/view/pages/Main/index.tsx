// Core
import React, { FC } from 'react';

// Tools
// import { useOnScreen } from '../../../tools/hooks';

// Container
import { Footer, MyContainer } from '../../containers';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Title } from '../../elements';
import { Box } from '@mui/material';


// Styles
import { Header } from './styles';

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
            <Header>
                <MyContainer  sx = {{ display: 'flex', justifyContent: 'center', alignContent: 'center', height: '1000px' }}>
                    <Title>
                        Software
                        <br />
                        development
                        services
                    </Title>
                </MyContainer>
            </Header>
            <Box>

            </Box>
            <Footer />
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
