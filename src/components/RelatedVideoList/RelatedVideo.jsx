import React from 'react';

import {
  StyledRelatedVideo,
  StyledRelatedVideoCover,
  StyledRelatedVideoTitle,
} from './RelatedVideo.styled';

const RelatedVideo = ({ title, thumbnails, videoId }) => {
  return (
    <StyledRelatedVideo to={`/${videoId}`}>
      <StyledRelatedVideoCover src={thumbnails.medium.url} alt={title} />
      <StyledRelatedVideoTitle>{title}</StyledRelatedVideoTitle>
    </StyledRelatedVideo>
  );
};

export default RelatedVideo;
