import React, { useReducer, useRef, useEffect } from 'react';

import { PortalContext } from '../contexts';
import { PORTAL } from '../types';

export const initialState = {
  node: document.body,
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case PORTAL.SET: {
      const { node } = payload;
      return {
        ...state,
        node,
      };
    }

    default:
      throw new Error();
  }
}

export default function PortalContextProvider({ children }) {
  const portalNode = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (portalNode?.current) {
      dispatch({
        type: PORTAL.SET,
        payload: {
          node: portalNode.current,
        },
      });
    }
  }, []);

  return (
    <PortalContext.Provider value={{ ...state, dispatch }}>
      {children}
      <div ref={portalNode} id="portal" />
    </PortalContext.Provider>
  );
}
