import React from 'react';

import {
  StyledVideo,
  StyledVideoCover,
  StyledVideoTitle,
  StyledVideoDescription,
} from './Video.styled';

export default function Video({ title, description, thumbnails }) {
  return (
    <StyledVideo>
      <StyledVideoCover src={thumbnails.high.url} />
      <StyledVideoTitle>{title}</StyledVideoTitle>
      <StyledVideoDescription>{description}</StyledVideoDescription>
    </StyledVideo>
  );
}
