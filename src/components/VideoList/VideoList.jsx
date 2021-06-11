import React, { useState, useEffect } from 'react';

import Video from './Video';
import { StyledVideoList } from './VideoList.styled';

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('/data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await response.json();
      setVideos(json.items);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledVideoList>
      {videos.map(({ etag, snippet }) => {
        return <Video key={etag} {...snippet} />;
      })}
    </StyledVideoList>
  );
}
