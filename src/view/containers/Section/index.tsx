// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.section<PropTypes['image']>`
    padding-top: 90px;
    padding-bottom: 60px;

    ${({ image }) => image && {
        backgroundImage:    `url(${image})`,
        backgroundRepeat:   'no-repeat',
        backgroundSize:     'cover',
        backgroundPosition: 'center center',
    }}
`;

// Types
type PropTypes = {
    image?: any;
}

export const Section: FC<PropTypes> = ({ children, image }) => {
    return (
        <Container image = { image }>
            {children}
        </Container>
    );
};
