// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
export interface PropTypes {
    //todo any
    image: any
}

export const Header: FC<PropTypes> = ({ children, ...props }) => {
    return (
        <S.Container { ...props }>
            {children}
        </S.Container>
    );
};
