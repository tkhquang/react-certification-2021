import React from 'react';

import RelatedVideo from './RelatedVideo';
import { StyledRelatedVideoList } from './RelatedVideoList.styled';

const RelatedVideoList = ({ videos }) => {
  return (
    <StyledRelatedVideoList>
      {videos.map(({ etag, id, snippet }) => {
        return <RelatedVideo key={etag} {...snippet} videoId={id.videoId} />;
      })}
    </StyledRelatedVideoList>
  );
};

export default RelatedVideoList;
