import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { TestAppContainer } from '../../test';
import HeaderSearch from './HeaderSearch';

describe('HeaderSearch', () => {
  beforeEach(() => {
    render(
      <TestAppContainer>
        <HeaderSearch />
      </TestAppContainer>
    );
  });

  test('updates query value correctly', () => {
    const searchBox = screen.getByPlaceholderText(/Search/, { name: 'q' });
    fireEvent.change(searchBox, { target: { value: 'new query' } });
    fireEvent.submit(searchBox);

    expect(searchBox).toHaveValue('new query');
  });
});
