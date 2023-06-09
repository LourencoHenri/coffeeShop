import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --yellow-dark: #C47F17;
        --yellow: #DBAC2C;
        --yellow-light: #F1E9C9;
        --purple-dark: #4B2995;
        --purple: #8047F8;
        --purple-light: #EBE5F9;

        --base-tittle: #272221;
        --base-subtitle: #403937;
        --base-text: #574F4D;
        --base-label: #8D8686;
        --base-hover: #D7D5D5;
        --base-button: #E6E5E5;
        --base-input: #EDEDED;
        --base-card: #F3F2F2;
        --background: #FAFAFA;
        --white: #FFFFFF;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
`