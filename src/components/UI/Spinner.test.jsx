import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('renders without crashing', () => {
    render(<Spinner />);
  });
});
