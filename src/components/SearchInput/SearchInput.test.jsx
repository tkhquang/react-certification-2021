import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    render(
      <SearchInput
        id="search"
        name="test"
        aria-label="search-test"
        placeholder="Search..."
        onChange={onChange}
      />
    );
  });

  test('renders with correct attributes', () => {
    expect(screen.getByPlaceholderText(/Search/, { name: 'test' })).toBeInTheDocument();
  });

  test('updates states correctly', () => {
    const searchBox = screen.getByPlaceholderText(/Search/, { name: 'test' });
    fireEvent.change(searchBox, { target: { value: 'new search' } });
    expect(searchBox).toHaveValue('new search');
  });

  test('triggers onChange correctly', () => {
    const searchBox = screen.getByPlaceholderText(/Search/, { name: 'test' });
    fireEvent.change(searchBox, { target: { value: 'onChange value' } });

    expect(onChange).toBeCalled();
  });
});
