// Core
import { styled, Box, Typography } from '@mui/material';

export const Container = styled(Box, {})(({ theme }) => ({
    padding:   '25px 0px',
    borderTop: `1px solid ${theme.colors.grey[ 100 ]}`,
}));

export const BoxWithTopBorder = styled(Box, {})(({ theme }) => ({
    marginTop: '20px',
    padding:   '15px 0px',
    borderTop: `1px solid ${theme.colors.grey[ 100 ]}`,
    width:     '100%',
}));

export const ContainerContact = styled(Box, {})`
    padding-bottom: 15px;
    width:   100%;
`;

export const MyTypographyParagraph  = styled('p', {})(({ theme }) => ({
    padding:    '5px 0px',
    fontSize:   theme.fonts.size[ 200 ],
    fontFamily: 'Nunito',
    fontWeight: 700,
    color:      theme.colors.primary[ 50 ],

    [ theme.breakpoints.down('md') ]: {
        '&': {
            textAlign: 'center',
        },
    },
}));

