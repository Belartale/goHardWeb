// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
import Nunito from '../fonts/Nunito.ttf';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
    * {
        scroll-behavior: smooth;
    }

    /* Fonts */
    @font-face {
        font-family: 'Nunito';
        src: url(${Nunito}) format('truetype');
    }
`;
