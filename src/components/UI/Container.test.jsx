import React from 'react';
import { render } from '@testing-library/react';

import Container from './Container';
import { TestAppContainer } from '../../test';

describe('Container', () => {
  test('renders without crashing', () => {
    render(
      <TestAppContainer>
        <Container />
      </TestAppContainer>
    );
  });
});
