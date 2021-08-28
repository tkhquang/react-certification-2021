import React, { useReducer, useEffect } from 'react';

import { UserContext } from '../contexts';
import { USER } from '../types';

export const initialState = {
  user: null,
  isLoaded: false,
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case USER.SET: {
      const { user } = payload;
      window.localStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        user,
        isLoaded: true,
      };
    }

    default:
      throw new Error();
  }
}

export default function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (!user) {
      return;
    }
    dispatch({
      type: USER.SET,
      payload: {
        user: JSON.parse(user),
      },
    });
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>
  );
}
