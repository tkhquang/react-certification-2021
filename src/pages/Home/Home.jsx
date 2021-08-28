import React, { useContext, useEffect } from 'react';

import { YoutubeQueryContext } from '../../contexts';
import { FullCenteredContainer, Spinner } from '../../components/UI';
import { useRequest } from '../../hooks';
import { searchListByQuery } from '../../api/youtube';
import VideoList from '../../components/VideoList';

function HomePage() {
  const { query } = useContext(YoutubeQueryContext);

  const { data: videos, error, isLoading, fetchData } = useRequest({
    request: searchListByQuery,
  });

  useEffect(() => {
    fetchData({ query });
  }, [query, fetchData]);

  if (error) {
    return (
      <FullCenteredContainer>
        <span>Oops, something went wrong!</span>
      </FullCenteredContainer>
    );
  }

  if (isLoading) {
    return (
      <FullCenteredContainer>
        <Spinner />
      </FullCenteredContainer>
    );
  }

  return (
    <FullCenteredContainer>
      {videos ? <VideoList videos={videos} basePath="" /> : null}
    </FullCenteredContainer>
  );
}

export default HomePage;
