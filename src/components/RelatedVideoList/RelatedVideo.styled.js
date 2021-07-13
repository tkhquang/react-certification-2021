import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledRelatedVideo = styled(Link)`
  display: flex;
  overflow: hidden;
  cursor: pointer;
  text-decoration: inherit;

  ${({ theme }) => {
    const { colors, shadows, radii } = theme;
    return css`
      box-shadow: ${shadows.md};
      border-radius: ${radii.sm};
      color: ${colors.onSurface};
      background-color: ${colors.surface};
    `;
  }}
`;

export const StyledRelatedVideoCover = styled.img`
  color: grey;
  height: auto;
  width: 40%;
  min-width: 40%;
  object-fit: cover;
  background-color: grey;
`;

export const StyledRelatedVideoTitle = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: semi-bold;
  height: calc(1.25rem * 2);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      margin: ${spaces.sm};
    `;
  }}
`;
