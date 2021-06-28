import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from '../../components/UI';
import VideoList from '../../components/VideoList';

import { useYoutubeData } from '../../hooks';

function HomePage() {
  const { videos, search: doSearch } = useYoutubeData();
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q');

  useEffect(() => {
    if (pathname === '/') {
      doSearch({ query: q });
    }
  }, [doSearch, pathname, q]);

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
