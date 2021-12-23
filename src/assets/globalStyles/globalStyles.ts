// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
// import Roboto from '../fonts/Roboto-Regular.ttf';
import { fonts } from '../';

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

    /* Fonts */
    
    `;

// @font-face {
//     font-family: Nunito;
//     src: url('${fonts.Nunito}') format('opentype');
// }

// fonts size
// 12,15
// 14
// 15
// 18
// 20
// 23
// 24
// 25
// 35
// 44
// 72
// 96
// 100
