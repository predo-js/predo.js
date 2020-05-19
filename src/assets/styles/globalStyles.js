import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        background: #fff;
        font-family: 'Montserrat';
    }

    pre {
        border-radius: 5px;
        background: gray;
        padding: 25px;
        line-height: 18px;
    }
`;

export default GlobalStyle;