// Core
import { Compiler } from 'webpack';

// Theme default
import { defaultTheme } from '../../assets';

declare module 'fontmin-webpack' {
    export default class FontminPlugin {
        constructor(options: FontminPluginOptions);
        apply(compiler: Compiler): void;
    }

    interface FontminPluginOptions {
        autodetect: boolean
        glyphs: string[]
        allowedFilesRegex: RegExp | null
        skippedFilesRegex: RegExp | null
    }
}

// Types
type TypesColors = typeof defaultTheme.colors;
type TypesFonts = typeof defaultTheme.fonts;

declare module '@mui/material/styles' {
    interface Theme {
        colors: TypesColors;
        fonts: TypesFonts;
    }

    interface ThemeOptions {
        colors?: TypesColors;
        fonts?: TypesFonts;
    }
}
