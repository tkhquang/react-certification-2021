import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledRelatedVideo,
  StyledRelatedVideoCover,
  StyledRelatedVideoTitle,
} from './RelatedVideo.styled';

const RelatedVideo = ({ title, thumbnails, videoId }) => {
  return (
    <Link as={StyledRelatedVideo} to={`/${videoId}`}>
      <StyledRelatedVideoCover src={thumbnails.medium.url} alt={title} />
      <StyledRelatedVideoTitle>{title}</StyledRelatedVideoTitle>
    </Link>
  );
};

export default RelatedVideo;
