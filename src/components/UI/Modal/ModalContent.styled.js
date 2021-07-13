import styled, { css } from 'styled-components';

export const StyledModalContent = styled.div`
  flex: 1;
  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      padding: ${spaces.md};
    `;
  }};
`;
