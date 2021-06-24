import React, { useState } from 'react';

import Header from '../Header';

import { YoutubeDataContext } from '../../contexts';
import { StyledLayout } from './Layout.styled';

export default function Layout({ children, ...rest }) {
  const [videos, setVideos] = useState([]);

  return (
    <YoutubeDataContext.Provider value={{ videos, setVideos }}>
      <Header />
      <StyledLayout {...rest}>{children}</StyledLayout>
    </YoutubeDataContext.Provider>
  );
}
