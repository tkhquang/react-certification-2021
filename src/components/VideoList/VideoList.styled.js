import styled, { css } from 'styled-components';

import { up } from '../../styles';

export const StyledVideoList = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem;

  ${up(
    'xs',
    css`
      grid-template-columns: repeat(2, minmax(0, 1fr));
    `
  )}

  ${up(
    'md',
    css`
      grid-template-columns: repeat(3, minmax(0, 1fr));
    `
  )}

  ${up(
    'lg',
    css`
      grid-template-columns: repeat(4, minmax(0, 1fr));
    `
  )}
`;
