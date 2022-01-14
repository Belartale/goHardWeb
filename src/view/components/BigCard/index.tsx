// Core
import React, { FC } from 'react';

// Components
import { SmallCard } from '..';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const BigCard: FC<PropTypes> = () => {
    return (
        <S.Container>
            <SmallCard
                text = 'asd'
                variantText = 'green'>
                asd
            </SmallCard>
        </S.Container>
    );
};
