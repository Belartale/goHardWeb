// Core
import { styled } from '@mui/material';

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


    // color:      'transparent',
    // textShadow: '-0 -2px 0 #00FF21, 0 -2px 0 #00FF21, -0 2px 0 #00FF21, 0 2px 0 #00FF21, -2px -0 0 #00FF21, 2px -0 0 #00FF21, -2px 0 0 #00FF21, 2px 0 0 #00FF21, -1px -2px 0 #00FF21, 1px -2px 0 #00FF21, -1px 2px 0 #00FF21, 1px 2px 0   #00FF21,-2px -1px 0   #00FF21, 2px -1px 0   #00FF21,-2px  1px 0   #00FF21, 2px  1px 0   #00FF21,-2px -2px 0   #00FF21, 2px -2px 0   #00FF21,-2px  2px 0   #00FF21, 2px  2px 0   #00FF21,-2px -2px 0   #00FF21, 2px -2px 0   #00FF21,-2px  2px 0   #00FF21, 2px  2px 0   #00FF21;',
}));

