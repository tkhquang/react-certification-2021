import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';

import { FavoritesContext } from '../../contexts';
import DetailedVideo from '../../components/DetailedVideo';
import RelatedVideoList from '../../components/RelatedVideoList';
import { StyledVideoDetails } from './FavoritesDetails.styled';

export default function FavoritesDetailsPage() {
  const { id } = useParams();
  const { favorites } = useContext(FavoritesContext);

  return (
    <StyledVideoDetails>
      <DetailedVideo id={id} />
      <RelatedVideoList videos={favorites} basePath="/favorites" />
    </StyledVideoDetails>
  );
}
