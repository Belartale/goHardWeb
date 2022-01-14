// Core
import { styled } from '@mui/material';

// Images
import laptop from '../../../assets/images/laptop.png';


export const Header = styled('header', {})(({ theme }) => ({
    backgroundImage:    `url(${laptop})`,
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
    height:             '100vh',
    width:              '100%',
}));


export const TextStroke = styled('span', {})(({ theme }) => ({
    // WebkitTextFillColor:   'transparent',
    // WebkitBackgroundClip:  'text',
    // WebkitTextStrokeWidth: '1px',
    // WebkitTextStrokeColor: 'green',
    // transition:            'all .3s',
    // ':hover':              {
    //     WebkitTextStrokeColor: 'white',
    // },

    // WebkitTextStrokeWidth: '1px',
    // WebkitTextStrokeColor: 'green',

    // textShadow: '0 0 2px black',

    // backgroundColor: 'transparent',
    // color:           'transparent',
    // textShadow:      '-0 -2px 0 #00FF21, 0 -2px 0 #00FF21, -0 2px 0 #00FF21, 0 2px 0 #00FF21, -2px -0 0 #00FF21, 2px -0 0 #00FF21, -2px 0 0 #00FF21, 2px 0 0 #00FF21, -1px -2px 0 #00FF21, 1px -2px 0 #00FF21, -1px 2px 0 #00FF21, 1px 2px 0   #00FF21,-2px -1px 0   #00FF21, 2px -1px 0   #00FF21,-2px  1px 0   #00FF21, 2px  1px 0   #00FF21,-2px -2px 0   #00FF21, 2px -2px 0   #00FF21,-2px  2px 0   #00FF21, 2px  2px 0   #00FF21,-2px -2px 0   #00FF21, 2px -2px 0   #00FF21,-2px  2px 0   #00FF21, 2px  2px 0   #00FF21;',
}));
