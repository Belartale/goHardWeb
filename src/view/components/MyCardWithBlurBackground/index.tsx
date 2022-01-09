// Core
import React, { FC } from 'react';
import { CardProps } from '@mui/material';

// Bus
// import {} from '../../../bus/'

// Styles
import { MyContainer, MyCardContent, MyCardHeader } from './styles';

// Types
interface TypesProps extends CardProps {
    title: string,
    text: string,
}


export const MyCardWithBlurBackground: FC<TypesProps> = ({ title, text, ...props }) => {
    return (
        <MyContainer { ...props }>
            <MyCardHeader title = { title }/>
            <MyCardContent>
                {text}
            </MyCardContent>
        </MyContainer>
    );
};
