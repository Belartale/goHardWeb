// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Bus
// import {} from '../../../bus/'

// Styles
const Container = styled.section<PropTypes['image']>`
    padding-top: 90px;
    padding-bottom: 60px;

    ${({ image }) => image && {
        backgroundImage:    `url(${image})`,
        backgroundRepeat:   'no-repeat',
        backgroundPosition: 'center center',
    }}
`;

// Types
type PropTypes = {
    /* type props here */
    children: React.ReactNode | React.ReactNodeArray;
    image?: any;
}

export const Section: FC<PropTypes> = ({ children, image }) => {
    return (
        <Container image = { image }>
            {children}
        </Container>
    );
};
