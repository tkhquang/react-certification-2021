import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      max-width: ${spaces.container};
    `;
  }}

  margin-left: auto;
  margin-right: auto;
`;
