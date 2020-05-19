import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        --bg: #fff;
        --text-color: #000;
        --theme-icon-color: #000;
        --social-icon-color: #000;

        margin: 0;
        padding: 0;
        width: 100%;
        color: var(--text-color);
        background: var(--bg);
        font-family: 'Montserrat';
        transition: all .2s ease-in-out;
    }

    body.dark {
        --bg: #121212;
        --text-color: #e1f4f3;
        --theme-icon-color: yellow;
        --social-icon-color: #fff;
    }

    pre {
        border-radius: 5px;
        background: gray;
        padding: 25px;
        line-height: 18px;
    }
`;

export default GlobalStyle;