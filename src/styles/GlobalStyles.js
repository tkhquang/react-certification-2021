import { createGlobalStyle, css } from 'styled-components';
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
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        color: ${colors.onBackground};
        background-color: ${colors.background};
      `;
    }}

  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
