import React, { useContext } from 'react';

import { FullCenteredContainer, Spinner } from '../../components/UI';
import { FavoritesContext } from '../../contexts';
import VideoList from '../../components/VideoList';

function FavoritesPage() {
  const { favorites, isLoaded } = useContext(FavoritesContext);

  return (
    <FullCenteredContainer>
      {isLoaded ? <VideoList videos={favorites} basePath="favorites" /> : <Spinner />}
    </FullCenteredContainer>
  );
}

export default FavoritesPage;
