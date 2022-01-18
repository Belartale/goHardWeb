// Core
import { white, black, green, grey } from '../colors';

// Types
export type TypesColors = typeof defaultTheme.colors;
export type TypesFonts = typeof defaultTheme.fonts;

export const defaultTheme = {
    name:   'defaultTheme',
    colors: {
        primary:   white,
        secondary: black,
        success:   green,
        grey:      grey,
    },
    fonts: {
        size: {
            first:      '12.15px',
            second:     '14px',
            third:      '15px',
            fourth:     '18px',
            fifth:      '20px',
            sixth:      '23px',
            seventh:    '24px',
            eighth:     '25px',
            ninth:      '35px',
            tenth:      '44px',
            eleventh:   '72px',
            twelfth:    '96px',
            thirteenth: '100px',
        },
        // todo line height
        lineHeight: {},
    },
};
