// Core
import React, { FC } from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material';

// Containers
import { Routes } from './routes';


// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Containers
import { NavBar } from './containers';

// Styles
export const AppContainer = styled(
    'div',
    {},
)(({ theme }) => ({
    display:       'flex',
    flexDirection: 'column',
    background:    theme.colors.secondary[ 50 ],
}));

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

export const App: FC = () => {
    const customTheme = createTheme({
        colors: defaultTheme.colors,
        fonts:  defaultTheme.fonts,
    });

    return (
        <ThemeProvider theme = { customTheme } >
            <GlobalStyles />
            <AppContainer>
                <NavBar />
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
