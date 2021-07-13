import React from 'react';

import Video from './Video';
import { StyledVideoList } from './VideoList.styled';

export default function VideoList({ videos, basePath = '' }) {
  if (videos.length === 0) {
    return <span>It is empty</span>;
  }

  return (
    <StyledVideoList>
      {videos.map(({ etag, id, snippet }) => {
        return (
          <Video
            key={etag}
            {...snippet}
            videoId={id?.videoId || id}
            basePath={basePath}
          />
        );
      })}
    </StyledVideoList>
  );
}
