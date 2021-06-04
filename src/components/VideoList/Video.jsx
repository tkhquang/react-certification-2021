import React from 'react';
import styled, { css } from 'styled-components';

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const StyledVideoCover = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ src }) => {
    return css`
      background-image: url(${src});
    `;
  }}
`;

const StyledVideoTitle = styled.div`
  font-size: 24px;
  font-weight: semi-bold;
  margin: 0.75rem;
`;

const StyledVideoDescription = styled.div`
  margin: 0.75rem;
`;

export default function Video({ title, description, thumbnails }) {
  return (
    <StyledVideo>
      <StyledVideoCover src={thumbnails.high.url} />
      <StyledVideoTitle>{title}</StyledVideoTitle>
      <StyledVideoDescription>{description}</StyledVideoDescription>
    </StyledVideo>
  );
}
