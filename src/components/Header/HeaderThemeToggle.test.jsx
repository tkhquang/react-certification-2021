import React from 'react';
import { render } from '@testing-library/react';

import { TestAppContainer } from '../../test';
import HeaderThemeToggle from './HeaderThemeToggle';

describe('HeaderThemeToggle', () => {
  test('renders without crashing', () => {
    render(
      <TestAppContainer>
        <HeaderThemeToggle />
      </TestAppContainer>
    );
  });
});
