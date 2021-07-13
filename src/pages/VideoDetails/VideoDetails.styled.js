import styled, { css } from 'styled-components';

import { up } from '../../styles';

export const StyledVideoDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      gap: ${spaces.md};
      margin: ${spaces.md};
    `;
  }}

  ${up(
    'md',
    css`
      grid-template-columns: 60% minmax(0, 1fr);
    `
  )}

  ${up(
    'lg',
    css`
      grid-template-columns: 70% minmax(0, 1fr);
    `
  )}
`;
