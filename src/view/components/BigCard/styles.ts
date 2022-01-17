// Core
import { Box, BoxProps, Grid, GridProps, styled, Typography } from '@mui/material';
import { PropTypesBigCard } from '.';

// Types
interface PropTypes extends BoxProps {
    variantCard: PropTypesBigCard['variantCard']
}


export const Container = styled(Box, {})<PropTypes>(({ theme, variantCard }) => ({
    maxWidth:       '750px',
    padding:        '30px',
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',

    textAlign: 'center',

    border:       `1px solid ${theme.colors.grey[ 200 ]}`,
    borderRadius: '5px',

    //todo word-brake


    backgroundColor: variantCard === 'grey' ? theme.colors.secondary[ 100 ] : 'transparent',
}));

export const Card = styled(Box, {})<PropTypes>(({ theme, variantCard }) => ({
    width: '400px',

    marginBottom: '40px',
}));
export const CardTitle = styled(Box, {})<PropTypes>`
    ${({ theme, variantCard }) => variantCard === 'grey' && {
        fontSize: theme.fonts.size.twelfth,
        color:    theme.colors.success[ 50 ],
    }}
`;
export const CardSubtitle = styled(Box, {})<PropTypes>`
    ${({ theme, variantCard }) => variantCard === 'grey' && {
        fontSize: theme.fonts.size.fourth,
        color:    theme.colors.success[ 50 ],

    }}
`;
export const CardText = styled(Box, {})<PropTypes>(({ theme, variantCard }) => ({
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    textAlign:      'center',
}));
