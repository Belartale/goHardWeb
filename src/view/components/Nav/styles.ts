// Core
import { styled, ListItemText } from '@mui/material';

export const MyListItemText = styled(ListItemText, {})(({ theme }) => ({
    color: theme.colors.primary[ 50 ],
}));
