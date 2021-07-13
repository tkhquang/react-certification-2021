import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestAppContainer } from '../../test';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <TestAppContainer>
        <Header />
      </TestAppContainer>
    );
  });

  test('has a search box', () => {
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });

  test('has a toggle switch for dark/light theme', () => {
    expect(screen.getByRole('switch', { name: 'theme-toggle' })).toBeInTheDocument();
  });
});
