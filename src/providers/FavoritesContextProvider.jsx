import React, { useReducer, useEffect } from 'react';

import { FavoritesContext } from '../contexts';
import { FAVORITES } from '../types';

export const initialState = {
  favorites: [],
  isLoaded: false,
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case FAVORITES.SET: {
      const { videos } = payload;

      window.localStorage.setItem('favorites', JSON.stringify(videos));
      return {
        ...state,
        favorites: videos,
        isLoaded: true,
      };
    }

    case FAVORITES.ADD: {
      const { video } = payload;
      const updatedFavorites = [...state.favorites, video];

      window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    }

    case FAVORITES.REMOVE: {
      const { video } = payload;
      const updatedFavorites = state.favorites.filter((item) => {
        return (item.id?.videoId || item.id) !== (video.id?.videoId || video.id);
      });

      window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    }

    default:
      throw new Error();
  }
}

export default function FavoritesContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const favorites = window.localStorage.getItem('favorites');

    dispatch({
      type: FAVORITES.SET,
      payload: {
        videos: favorites ? JSON.parse(favorites) : [],
      },
    });
  }, []);

  return (
    <FavoritesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}
