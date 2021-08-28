import React, { useEffect, createRef, forwardRef, useRef } from 'react';
import { render } from '@testing-library/react';

import useForkRef from './useForkRef';

describe('useForkRef', () => {
  test('functions correctly', () => {
    const externalRef = createRef();

    const Component = forwardRef((props, ref) => {
      const internalRef = useRef(null);

      useEffect(() => {
        expect(internalRef.current).toBeInTheDocument();
      }, []);

      return <div ref={useForkRef(internalRef, ref)} {...props} />;
    });

    render(<Component ref={externalRef} />);
    expect(externalRef.current).toBeInTheDocument();
  });
});
