import styled, { css } from 'styled-components';

export const StyledModalTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      padding: ${spaces.md} ${spaces.md};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    `;
  }}
`;

export const StyledModalClose = styled.button.attrs((props) => ({
  type: 'button',
  ...props,
}))`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  cursor: pointer;
`;
