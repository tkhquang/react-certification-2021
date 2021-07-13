import styled, { css } from 'styled-components';

export const StyledRelatedVideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: 120px;

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      gap: ${spaces.md};
    `;
  }}
`;
