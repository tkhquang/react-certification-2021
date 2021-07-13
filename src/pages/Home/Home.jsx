import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { YoutubeQueryContext } from '../../contexts';
import { FullCenteredContainer, Spinner } from '../../components/UI';
import { useYoutubeData } from '../../hooks';
import VideoList from '../../components/VideoList';

function HomePage() {
  const { query } = useContext(YoutubeQueryContext);
  const { videos, search, isLoading } = useYoutubeData();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      search({ query });
    }
  }, [search, query, pathname]);

  if (!videos) {
    return null;
  }

  return (
    <FullCenteredContainer>
      {isLoading ? <Spinner /> : <VideoList videos={videos} basePath="" />}
    </FullCenteredContainer>
  );
}

export default HomePage;
