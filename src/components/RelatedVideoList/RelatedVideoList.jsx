import React from 'react';

import RelatedVideo from './RelatedVideo';
import { StyledRelatedVideoList } from './RelatedVideoList.styled';

const RelatedVideoList = ({ videos, basePath = '' }) => {
  return (
    <StyledRelatedVideoList>
      {videos.map(({ etag, id, snippet }) => {
        return (
          <RelatedVideo
            key={etag}
            {...snippet}
            videoId={id.videoId}
            basePath={basePath}
          />
        );
      })}
    </StyledRelatedVideoList>
  );
};

export default RelatedVideoList;
