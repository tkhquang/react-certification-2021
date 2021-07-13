import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';

import { FavoritesContext } from '../../contexts';
import { FAVORITES } from '../../types';
import { searchListById } from '../../api/youtube';

import {
  StyledDetailedVideo,
  StyledVideoIframe,
  StyledVideoIframeContainer,
  StyledVideoTitle,
  StyledFavoriteButton,
  StyledVideoDescription,
} from './DetailedVideo.styled';

const DetailedVideo = ({ id }) => {
  const { favorites, dispatch } = useContext(FavoritesContext);
  const [video, setVideo] = useState(null);
  const isInFavorites = useMemo(() => {
    return favorites.some((item) => {
      return (item.id?.videoId || item.id) === id;
    });
  }, [favorites, id]);

  useEffect(() => {
    searchListById({ id }).then((videos) => {
      setVideo(videos?.[0]);
    });
  }, [id]);

  const addToFavorites = useCallback(() => {
    dispatch({
      type: FAVORITES.ADD,
      payload: {
        video,
      },
    });
  }, [dispatch, video]);

  const removeFromFavorites = useCallback(() => {
    dispatch({
      type: FAVORITES.REMOVE,
      payload: {
        video,
      },
    });
  }, [dispatch, video]);

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
          {isInFavorites ? (
            <StyledFavoriteButton onClick={removeFromFavorites}>
              Remove from Favorites
            </StyledFavoriteButton>
          ) : (
            <StyledFavoriteButton onClick={addToFavorites}>
              Add to Favorites
            </StyledFavoriteButton>
          )}
          <StyledVideoDescription>{video.snippet.description}</StyledVideoDescription>
        </>
      )}
    </StyledDetailedVideo>
  );
};

export default DetailedVideo;
