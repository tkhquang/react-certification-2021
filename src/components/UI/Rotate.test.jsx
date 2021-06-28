import React from 'react';
import { render } from '@testing-library/react';

import Rotate from './Rotate';

describe('Rotate', () => {
  test('renders with correct styles', () => {
    const { container } = render(<Rotate />);
    expect(container.firstChild).toHaveStyle(`animation-duration: 5000ms`);
  });

  test('renders with correct styles when passing custom `duration`', () => {
    const { container } = render(<Rotate duration="200ms" />);
    expect(container.firstChild).toHaveStyle(`animation-duration: 200ms`);
  });
});
