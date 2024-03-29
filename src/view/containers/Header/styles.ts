// Core
import { styled } from '@mui/material';

// Types
import { PropTypesHeader } from '.';

export const Container = styled('header', {})<PropTypesHeader>(({ image, backgroundsize, opacity }) => ({
    background: `linear-gradient(${opacity === 'true' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.0)'} 95.31%, #000000 100%), url(${image})`,

    backgroundRepeat:   'no-repeat',
    backgroundSize:     backgroundsize ? backgroundsize : 'auto',
    backgroundPosition: 'center center',
    height:             '100vh',
    width:              '100%',
}));
