// Core
import React, { FC } from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material';

// Routers
import { Routes } from './routes';

// Containers
import { NavBar } from './containers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';


// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const AppContainer = styled(
    'div',
    {},
)(({ theme }) => ({
    display:       'flex',
    flexDirection: 'column',
    background:    theme.colors.secondary[ 50 ],
}));

const customTheme = createTheme({
    colors: defaultTheme.colors,
    fonts:  defaultTheme.fonts,
});

export const App: FC = () => {
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
