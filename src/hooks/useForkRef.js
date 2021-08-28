// https://github.com/mui-org/material-ui/blob/2bcc874cf07b81202968f769cb9c2398c7c11311/packages/material-ui/src/utils/useForkRef.js
import { useMemo } from 'react';

function setRef(ref, value = null) {
  if (!ref) {
    return;
  }

  if (typeof ref === 'function') {
    ref(value);
  } else {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}

/**
 * Merges up to two React Refs into a single memoized function React Ref so you
 * can pass it to an element.
 *
 * @example
 * import React from "react";
 * import { useForkRef } from "./useForkRef";
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useForkRef(internalRef, ref)} />;
 * });
 */

export default function useForkRef(refA, refB) {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (value) => {
      setRef(refA, value);
      setRef(refB, value);
    };
  }, [refA, refB]);
}
