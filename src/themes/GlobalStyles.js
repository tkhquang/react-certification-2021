import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
