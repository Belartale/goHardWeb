// Core
import { Box, styled, Typography } from '@mui/material';

//Types
import { PropTypesContactBar } from '.';

export const Container = styled(Box, {})<PropTypesContactBar>`
    ${({ size }) => (size === 'sm' && {
        display:        'flex',
        justifyContent: 'space-between',
        flexWrap:       'wrap',
        alignItems:     'center',

        '@media (max-width: 550px)': {
            justifyContent:           'center',
            flexDirection:            'column',
            '& div:not(:last-child)': {
                marginBottom: '10px',
            },
        },
        '@media (min-width: 900px)': {
            justifyContent:           'center',
            flexDirection:            'column',
            '& div:not(:last-child)': {
                marginBottom: '10px',
            },
        },
        '@media (min-width: 1100px)': {
            justifyContent:           'space-between',
            flexDirection:            'row',
            '& div:not(:last-child)': {
                marginBottom: '0px',
            },
        },
    }) || (size === 'lg' && {
        display:        'flex',
        justifyContent: 'space-between',

        '@media (min-width: 600px)': {
            justifyContent: 'space-evenly',
            svg:            {
                height: '36px',
            },
        },
    })}
`;

export const BoxContainer = styled(Box, {})<PropTypesContactBar>`
    display:    flex;

    ${({ size }) => (size === 'sm' && {
        alignItems: 'center',
    }) || (size === 'lg' && {
        '&, .MuiBox-root': {
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
        },
        '.MuiTypography-root': {
            margin: '0 auto',
        },
        svg: {
            marginBottom: '10px',

            '@media (min-width: 600px)': {
                marginBottom: '20px',
            },
            '@media (min-width: 900px)': {
                marginBottom: '30px',
            },
        },
    })
}
`;

export const MyTypographyContact  = styled(Typography, {})<PropTypesContactBar>`
        font-family: 'Nunito';
        font-weight: 700;
        color:  ${({ theme }) => theme.colors.primary[ 50 ]};

    ${({ theme, size }) => (size === 'sm' && {
        marginLeft: '15px',
        fontSize:   theme.fonts.size[ 200 ],

        '@media (min-width: 900px)': {
            marginLeft: '10px',
        },
        '@media (min-width: 1000px)': {
            marginLeft: '15px',
        },
    }) || (size === 'lg' && {
        fontSize: '10px',

        '@media (min-width: 400px)': {
            fontSize: '12px',
        },
        '@media (min-width: 600px)': {
            fontSize: theme.fonts.size[ 200 ],
        },
    })}
`;

