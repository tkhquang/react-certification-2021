import React, { useContext } from 'react';

import { Container } from '../../components/UI';

import VideoList from '../../components/VideoList';
import { YoutubeDataContext } from '../../contexts';

function HomePage() {
  const { videos } = useContext(YoutubeDataContext);

  return (
    <Container>
      <VideoList videos={videos} />
    </Container>
  );
}

export default HomePage;
