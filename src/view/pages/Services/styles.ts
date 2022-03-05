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

export const StrokeText = styled('span', {})`
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary[ 50 ]};
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.primary[ 50 ]};
    color: transparent;
    line-height: 0px !important;
`;
