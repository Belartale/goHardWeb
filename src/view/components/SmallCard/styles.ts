// Core
import { styled, Typography, TypographyProps } from '@mui/material';

// Types
interface PropTypesTypography extends TypographyProps {
    variantText?: 'green'
}

export const MyTypography = styled(Typography, {})<PropTypesTypography>(({ theme, variantText }) => ({
    fontSize:   theme.fonts.size.fourth,
    color:      (variantText && theme.colors.success[ 50 ]) || theme.colors.primary[ 50 ],
    fontFamily: 'Nunito',
}));
