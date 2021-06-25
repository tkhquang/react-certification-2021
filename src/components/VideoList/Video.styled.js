import styled from 'styled-components';

export const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
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
  margin: 0.75rem;
  height: calc(1.5rem * 2);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledVideoDescription = styled.div`
  margin: 0.75rem;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
