import React, { useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../contexts';
import { theme } from '../styles';
import { THEME } from '../types';

export const initialState = {
  mode: 'light',
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case THEME.SET: {
      const { mode } = payload;
      return {
        ...state,
        mode,
      };
    }
    case THEME.TOGGLE: {
      const { mode } = state;
      return {
        ...state,
        mode: mode === 'light' ? 'dark' : 'light',
      };
    }
    default:
      throw new Error();
  }
}

const userPrefersDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { mode } = state;

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    dispatch({
      type: THEME.SET,
      payload: {
        mode: (() => {
          if (localTheme) {
            return JSON.parse(localTheme);
          }
          if (userPrefersDark) {
            return 'dark';
          }
          return 'light';
        })(),
      },
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(mode));
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      <ThemeProvider theme={theme[mode || 'light']}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
