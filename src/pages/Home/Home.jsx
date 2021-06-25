import React from 'react';

import { Container, Spinner } from '../../components/UI';
import VideoList from '../../components/VideoList';

import { useYoutubeData } from '../../hooks';

function HomePage() {
  const { loading, videos, error } = useYoutubeData();
  console.log(error);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <span>{JSON.stringify(error, null, 2)}</span>;
  }

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
