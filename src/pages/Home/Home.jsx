import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { YoutubeQueryContext } from '../../contexts';
import { Container } from '../../components/UI';
import { useYoutubeData } from '../../hooks';
import VideoList from '../../components/VideoList';

function HomePage() {
  const { query } = useContext(YoutubeQueryContext);
  const { videos, search } = useYoutubeData();
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
    <Container>
      <VideoList videos={videos} />
    </Container>
  );
}

export default HomePage;
