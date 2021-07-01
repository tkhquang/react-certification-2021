import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  test('renders with correct styles', () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toHaveStyle(`max-width: 1440px`);
  });
});
