// Core
import { styled } from '@mui/material';

export const TextStroke = styled('span', {})(({ theme }) => ({
    color:            'transparent',
    WebkitTextStroke: `1px ${theme.colors.success[ 50 ]}`,
}));

