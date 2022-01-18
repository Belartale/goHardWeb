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
        lineHeight: {
            50:  '13.15px',
            55:  '13.64px',
            100: '16.57px',
            200: '19.1px',
            300: '20.46px',
            400: '23.19px',
            550: '24.55px',
            600: '27.28px',
            700: '31.37px',
            800: '32.74px',
            900: '86px',
        },
    },
};
