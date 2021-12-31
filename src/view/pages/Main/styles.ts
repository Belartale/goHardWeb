// Core
import { Box, styled } from '@mui/material';

// Images
import laptop from '../../../assets/images/laptop.png';

export const Header = styled(Box, {})({
    backgroundImage:    `url(${laptop})`,
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
    height:             '100vh',
    width:              '100%',
});
