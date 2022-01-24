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
            50:   '12.15px',
            100:  '14px',
            200:  '15px',
            300:  '17px',
            400:  '18px',
            500:  '20px',
            600:  '23px',
            700:  '24px',
            800:  '25px',
            900:  '35px',
            A100: '40px',
            A200: '44px',
            A300: '72px',
            A400: '96px',
            A500: '100px',
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
