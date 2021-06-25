import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledVideo,
  StyledVideoCover,
  StyledVideoTitle,
  StyledVideoDescription,
} from './Video.styled';

export default function Video({ title, description, thumbnails, videoId }) {
  return (
    <Link as={StyledVideo} to={`/${videoId}`}>
      <StyledVideoCover src={thumbnails.high.url} alt={title} />
      <StyledVideoTitle>{title}</StyledVideoTitle>
      <StyledVideoDescription>{description}</StyledVideoDescription>
    </Link>
  );
}
