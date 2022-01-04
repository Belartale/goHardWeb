// Core
import React, { FC, useEffect, useCallback } from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
export const AppContainer = styled(
    'div',
    {},
)(({ theme }) => ({
    display:       'flex',
    flexDirection: 'column',
    background:    theme.colors.secondary[ 50 ],
    color:         'white', //! костыль
}));

// Types
type TypesColors = typeof defaultTheme.colors;
type TypesFonts = typeof defaultTheme.fonts;

declare module '@mui/material/styles' {
    interface Theme {
        colors: TypesColors;
        fontsSize: TypesFonts;
    }

    interface ThemeOptions {
        colors?: TypesColors;
        fontsSize?: TypesFonts;
    }
}

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

    const setOnlineStatusHanlder = useCallback(
        () => void setTogglerAction({
            type:  'isOnline',
            value: navigator.onLine,
        }),
        [ setTogglerAction ],
    );

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    const customTheme = createTheme({
        colors:    defaultTheme.colors,
        fontsSize: defaultTheme.fonts,
    });

    // fontsSize: defaultTheme.fonts,

    return (
        <ThemeProvider theme = { customTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
