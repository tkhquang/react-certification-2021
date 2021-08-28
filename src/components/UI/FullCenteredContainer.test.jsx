import React from 'react';
import { render } from '@testing-library/react';

import FullCenteredContainer from './FullCenteredContainer';
import { TestAppContainer } from '../../test';

describe('Container', () => {
  test('renders without crashing', () => {
    render(
      <TestAppContainer>
        <FullCenteredContainer />
      </TestAppContainer>
    );
  });
});
