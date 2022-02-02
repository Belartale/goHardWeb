// Core
import {
    styled,
    Typography,
    TypographyProps,
} from '@mui/material';

// Types
interface PropTypesTypography extends TypographyProps {
    varianttext?: 'green'
}

export const MyTypography = styled(Typography, {})<PropTypesTypography>(({ theme, varianttext }) => ({
    fontSize:   theme.fonts.size[ 400 ],
    fontWeight: 700,
    lineHeight: theme.fonts.lineHeight[ 550 ],
    fontFamily: 'Nunito',
    color:      (varianttext && theme.colors.success[ 50 ]) || theme.colors.primary[ 50 ],
}));
