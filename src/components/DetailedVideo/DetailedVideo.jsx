import React, { useEffect, useState } from 'react';

import { searchListById } from '../../api/youtube';

import {
  StyledDetailedVideo,
  StyledVideoIframe,
  StyledVideoIframeContainer,
  StyledVideoTitle,
  StyledVideoDescription,
} from './DetailedVideo.styled';

const DetailedVideo = ({ id }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    searchListById({ id }).then((videos) => {
      setVideo(videos?.[0]);
    });
  }, [id]);

  return (
    <StyledDetailedVideo>
      <StyledVideoIframeContainer>
        <StyledVideoIframe
          title="youtube"
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${id}?autoplay=0`}
          frameBorder="0"
        />
      </StyledVideoIframeContainer>
      {video && (
        <>
          <StyledVideoTitle>{video.snippet.title}</StyledVideoTitle>
          <StyledVideoDescription>{video.snippet.description}</StyledVideoDescription>
        </>
      )}
    </StyledDetailedVideo>
  );
};

export default DetailedVideo;
