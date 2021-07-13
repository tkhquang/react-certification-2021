import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { searchRelatedListById } from '../../api/youtube';
import DetailedVideo from '../../components/DetailedVideo';
import RelatedVideoList from '../../components/RelatedVideoList';
import { StyledVideoDetails } from './VideoDetails.styled';

export default function VideoDetailsPage() {
  const { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    searchRelatedListById({ id }).then(setRelatedVideos);
  }, [id]);

  return (
    <StyledVideoDetails>
      <DetailedVideo id={id} />
      <RelatedVideoList videos={relatedVideos} basePath="" />
    </StyledVideoDetails>
  );
}
