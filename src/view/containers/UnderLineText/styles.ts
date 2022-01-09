import { styled } from '@mui/material';

export const Container = styled('span', {})(({ theme }) => ({
    borderBottom: `2px solid ${theme.colors.success[ 50 ]}`,
    color:        theme.colors.success[ 50 ],
}));
