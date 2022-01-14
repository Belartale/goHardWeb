// Core
import React, { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

// Styles
export const Container = styled(Box, {})<PropTypes['image']>`
padding-top: 90px;
    padding-bottom: 60px;

    ${({ image }) => image && {
        backgroundImage:    `url(${image})`,
        backgroundRepeat:   'no-repeat',
        backgroundSize:     'cover',
        backgroundPosition: 'center center',
    }}`;

// Types
interface PropTypes extends BoxProps {
    //todo any
    image?: any;
}

export const Section: FC<PropTypes> = ({ children, image, ...props }) => {
    return (
        <Container
            { ...props }
            image = { image }>
            {children}
        </Container>
    );
};
