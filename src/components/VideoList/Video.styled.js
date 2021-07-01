import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledVideo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  text-decoration: inherit;

  ${({ theme }) => {
    const { colors, shadows, radii } = theme;
    return css`
      box-shadow: ${shadows.md};
      border-radius: ${radii.lg};
      color: ${colors.onSurface};
      background-color: ${colors.surface};
    `;
  }}
`;

export const StyledVideoCover = styled.img`
  color: grey;
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: grey;
`;

export const StyledVideoTitle = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: semi-bold;
  height: calc(1.5rem * 2);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      margin-top: ${spaces.md};
      margin-left: ${spaces.md};
      margin-right: ${spaces.md};
    `;
  }}
`;

export const StyledVideoDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      margin-top: ${spaces.md};
      margin-bottom: ${spaces.md};
      margin-left: ${spaces.md};
      margin-right: ${spaces.md};
    `;
  }}
`;
