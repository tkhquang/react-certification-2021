import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigationMenu = styled.div`
  display: flex;
  cursor: pointer;
`;

export const StyledNavigationLink = styled(Link)`
  text-decoration: inherit;

  ${({ theme }) => {
    const { colors, spaces } = theme;
    return css`
      color: ${colors.onSurface};
      background-color: ${colors.surface};
      padding: ${spaces.md};
      & + & {
        margin-top: ${spaces.md};
      }
    `;
  }}
`;
