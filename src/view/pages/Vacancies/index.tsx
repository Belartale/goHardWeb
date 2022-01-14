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

const Vacancies: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: Vacancies
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Vacancies />
    </ErrorBoundary>
);
