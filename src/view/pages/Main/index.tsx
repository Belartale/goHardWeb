// Core
import React, { FC } from 'react';

// Tools
// import { useOnScreen } from '../../../tools/hooks';

// Container
import { NavBar, Footer } from '../../containers';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Title } from '../../elements';


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
        <div>
            <NavBar />
            <header>
                <Title />
            </header>
            <Footer />
        </div>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
