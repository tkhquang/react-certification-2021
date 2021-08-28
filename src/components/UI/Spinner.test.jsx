import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';
import { TestAppContainer } from '../../test';

describe('Spinner', () => {
  test('renders without crashing', () => {
    render(
      <TestAppContainer>
        <Spinner />
      </TestAppContainer>
    );
  });
});
