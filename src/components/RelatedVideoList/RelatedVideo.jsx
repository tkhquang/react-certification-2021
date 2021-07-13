import React from 'react';

import {
  StyledRelatedVideo,
  StyledRelatedVideoCover,
  StyledRelatedVideoTitle,
} from './RelatedVideo.styled';

const RelatedVideo = ({ title, thumbnails, videoId, basePath }) => {
  return (
    <StyledRelatedVideo to={`${basePath}/${videoId}`}>
      <StyledRelatedVideoCover src={thumbnails?.medium?.url} alt={title} />
      <StyledRelatedVideoTitle>{title}</StyledRelatedVideoTitle>
    </StyledRelatedVideo>
  );
};

export default RelatedVideo;
