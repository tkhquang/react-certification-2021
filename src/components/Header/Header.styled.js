import styled, { css } from 'styled-components';

import { Container } from '../UI';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  ${({ theme }) => {
    const { colors, spaces, shadows } = theme;
    return css`
      height: ${spaces.headerHeight};
      color: ${colors.onSecondary};
      background-color: ${colors.secondary};
      box-shadow: ${shadows.lg};
    `;
  }}
  z-index: 1;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      padding-left: ${spaces.xs};
      padding-right: ${spaces.xs};
    `;
  }}
`;

export const StyledLeftPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRightPanel = styled.div`
  display: flex;
  align-items: center;
`;
