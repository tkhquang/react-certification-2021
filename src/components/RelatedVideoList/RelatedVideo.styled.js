import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledRelatedVideo = styled(Link)`
  display: flex;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
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
  margin: 0.75rem;
  height: calc(1.25rem * 2);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
