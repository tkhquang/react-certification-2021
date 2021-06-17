import React, { useState, useEffect } from 'react';

import { Container } from '../../components/UI';

import VideoList from '../../components/VideoList';

function HomePage() {
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
    <Container>
      <VideoList videos={videos} />
    </Container>
  );
}

export default HomePage;
