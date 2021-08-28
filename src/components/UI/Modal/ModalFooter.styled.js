import styled, { css } from 'styled-components';

export const StyledModalFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      padding: ${spaces.md} ${spaces.md};
      box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.2);
    `;
  }}
`;
