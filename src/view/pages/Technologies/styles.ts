// Core
import {
    Box,
    styled,
    Typography,
} from '@mui/material';

export const TitleTechnologies = styled(Typography, {})(({ theme }) => ({
    marginBottom: '25px',

    fontFamily: 'Nunito',
    fontWeight: 400,
    color:      theme.colors.primary[ 50 ],
    textAlign:  'center',

    '& span': {
        fontWeight: 700,
    },
}));
export const Wrapper = styled(Box, {})`
    margin: 0px 0px;
    @media (min-width: 900px) {
        margin: 40px 0px;
    }
`;

