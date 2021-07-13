import React, { useReducer } from 'react';

import { YoutubeQueryContext } from '../contexts';
import { YOUTUBE_QUERY } from '../types';

export const initialState = {
  query: 'Wizeline',
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case YOUTUBE_QUERY.SET: {
      const { query } = payload;
      return {
        ...state,
        query,
      };
    }

    default:
      throw new Error();
  }
}

export default function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <YoutubeQueryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </YoutubeQueryContext.Provider>
  );
}
