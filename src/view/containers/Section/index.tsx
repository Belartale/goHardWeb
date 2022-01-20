// Core
import React, { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

// Styles
export const Container = styled(Box, {})<PropTypes>`
    padding-top: 55px;
    padding-bottom: 30px;

    ${({ image }) => image && {
        backgroundImage:    `url(${image})`,
        backgroundRepeat:   'no-repeat',
        backgroundSize:     'cover',
        backgroundPosition: 'center center',
    }}
    
    @media (min-width: 600px) {
        padding-top: 70px;
        padding-bottom: 45px;
    }

    @media (min-width: 900px) {
        padding-top: 90px;
        padding-bottom: 60px;
    }
`;

// Types
interface PropTypes extends BoxProps {
    image?: string;
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
