// Core
import { styled } from '@mui/material';

// // Images
// import laptop from '../../../assets/images/laptop.png';

// export const Header = styled('header', {})(({ theme }) => ({
//     backgroundImage:    `url(${laptop})`,
//     backgroundRepeat:   'no-repeat',
//     backgroundPosition: 'center center',
//     height:             '100vh',
//     width:              '100%',

//     '& .devActive': {
//         WebkitTextStrokeColor: theme.colors.primary[ 50 ],
//     },
// }));


export const TextStroke = styled('span', {})(({ theme }) => ({
    // WebkitTextFillColor:   'transparent',
    // // WebkitBackgroundClip:  'padding-box',
    // backgroundClip:        'text',
    // WebkitTextStrokeWidth: '1px',
    // stroke: '-moz-initial';
    // WebkitTextStrokeColor: theme.colors.success[ 50 ],
    // transition:            'all .3s',
    // ':hover':              {
    //     WebkitTextStrokeColor: 'white',
    // },


    color:            'transparent',
    WebkitTextStroke: `1px ${theme.colors.success[ 50 ]}`,
    // ':hover':         {
    //     WebkitTextStrokeColor: theme.colors.primary[ 50 ],
    // },

    // color:      'transparent',
    // textShadow: '-0 -2px 0 #00FF21, 0 -2px 0 #00FF21, -0 2px 0 #00FF21, 0 2px 0 #00FF21, -2px -0 0 #00FF21, 2px -0 0 #00FF21, -2px 0 0 #00FF21, 2px 0 0 #00FF21, -1px -2px 0 #00FF21, 1px -2px 0 #00FF21, -1px 2px 0 #00FF21, 1px 2px 0   #00FF21,-2px -1px 0   #00FF21, 2px -1px 0   #00FF21,-2px  1px 0   #00FF21, 2px  1px 0   #00FF21,-2px -2px 0   #00FF21, 2px -2px 0   #00FF21,-2px  2px 0   #00FF21, 2px  2px 0   #00FF21,-2px -2px 0   #00FF21, 2px -2px 0   #00FF21,-2px  2px 0   #00FF21, 2px  2px 0   #00FF21;',
}));

