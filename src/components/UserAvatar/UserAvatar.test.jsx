import React from 'react';
import { render } from '@testing-library/react';

import UserAvatar from './UserAvatar';

const TEST_SRC = 'https://something.com/test.png';

describe('UserAvatar', () => {
  test('renders with correct attributes', () => {
    const { container } = render(<UserAvatar src={TEST_SRC} />);
    expect(container.firstChild).toHaveStyle(`background-image: url(${TEST_SRC})`);
  });
});
