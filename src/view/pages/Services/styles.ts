// Core
import { styled } from '@mui/material';

export const ColumnSpaceBetweenAndSpace = styled('div', {})`
    & > div:nth-of-type(2n) {
        margin-left: auto;
    }

    & > div:not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const MyTypography = styled('span', {})`
    margin-bottom: 5px;
`;
