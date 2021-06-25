import React from 'react';

import Video from './Video';
import { StyledVideoList } from './VideoList.styled';

export default function VideoList({ videos }) {
  return (
    <StyledVideoList>
      {videos.map(({ etag, id, snippet }) => {
        return <Video key={etag} {...snippet} videoId={id.videoId} />;
      })}
    </StyledVideoList>
  );
}
