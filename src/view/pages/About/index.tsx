// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const About: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: About
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <About />
    </ErrorBoundary>
);
