import styled from 'styled-components';

export const StyledRelatedVideo = styled.div`
  display: flex;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledRelatedVideoCover = styled.img`
  color: grey;
  height: 90px;
  width: 120px;
  min-height: 90px;
  min-width: 120px;
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
