// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
export interface PropTypesHeader {
    image: string
    backgroundsize?: string
    opacity?: boolean
}

export const Header: FC<PropTypesHeader> = ({ children, ...props }) => {
    return (
        <S.Container { ...props }>
            {children}
        </S.Container>
    );
};
