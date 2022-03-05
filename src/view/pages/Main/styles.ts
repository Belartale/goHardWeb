// Core
import { styled } from '@mui/material';

// Types
interface StrokeTextPropTypes {
    ishover: 'true' | 'false'
}

export const StrokeText = styled('span', {})<StrokeTextPropTypes>`
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.success[ 50 ]};
    ${({ theme, ishover }) => ishover === 'true' && {
        WebkitTextStrokeColor: theme.colors.primary[ 50 ],
    }}
`;
