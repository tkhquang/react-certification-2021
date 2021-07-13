import React from 'react';

import {
  StyledVideo,
  StyledVideoCover,
  StyledVideoTitle,
  StyledVideoDescription,
} from './Video.styled';

export default function Video({ title, description, thumbnails, videoId, basePath }) {
  return (
    <StyledVideo to={`${basePath}/${videoId}`}>
      <StyledVideoCover src={thumbnails?.high?.url} alt={title} />
      <StyledVideoTitle>{title}</StyledVideoTitle>
      <StyledVideoDescription>{description}</StyledVideoDescription>
    </StyledVideo>
  );
}
