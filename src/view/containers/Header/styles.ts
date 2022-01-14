// Core
import { styled } from '@mui/material';
import { PropTypes } from '.';

export const Container = styled('header', {})<PropTypes['image']>(({ theme, image }) => ({
    backgroundImage:    `url(${image})`,
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
    height:             '100vh',

    width: '100%',

    '& .devActive': {
        WebkitTextStrokeColor: theme.colors.primary[ 50 ],
    },
}));
