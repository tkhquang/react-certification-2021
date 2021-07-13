import React from 'react';
import { render } from '@testing-library/react';

import { TestAppContainer } from '../../../test';
import Drawer from './Drawer';

describe('Drawer', () => {
  test('renders without crashing', () => {
    render(
      <TestAppContainer>
        <Drawer>TEST</Drawer>
      </TestAppContainer>
    );
  });
});
