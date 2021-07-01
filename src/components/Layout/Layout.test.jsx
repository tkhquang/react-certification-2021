import React from 'react';
import { render } from '@testing-library/react';

import { TestAppContainer } from '../../test';
import Layout from './Layout';

describe('Layout', () => {
  test('renders without crashing', () => {
    render(
      <TestAppContainer>
        <Layout />
      </TestAppContainer>
    );
  });
});
