import styled, { css } from 'styled-components';

import { up } from '../../../styles';

export const StyledModal = styled.div`
  cursor: default;
  display: none;
  position: relative;
  flex-direction: column;
  transition: all 250ms linear;

  width: 100%;
  height: 100%;

  ${({ theme }) => {
    const { colors, radii } = theme;
    return css`
      color: ${colors.onSecondary};
      background-color: ${colors.secondary};
      border-radius: ${radii.md};
    `;
  }}

  ${up(
    'md',
    css`
      width: auto;
      height: auto;
      min-width: 300px;
      max-width: 90%;
      max-height: 90%;
    `
  )}

  &[data-enter] {
    display: flex;
  }

  &[data-leave] {
    display: none;
  }
`;
