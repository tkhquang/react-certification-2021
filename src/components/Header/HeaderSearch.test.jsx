import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { YoutubeDataContext } from '../../contexts';
import { TestAppContainer } from '../../test';
import HeaderSearch from './HeaderSearch';

describe('HeaderSearch', () => {
  beforeEach(() => {
    render(
      <TestAppContainer>
        <YoutubeDataContext.Provider
          value={{
            videos: [],
            setVideos: () => {},
          }}
        >
          <HeaderSearch />
        </YoutubeDataContext.Provider>
      </TestAppContainer>
    );
  });

  test('pushes query string correctly onSubmit', () => {
    const searchBox = screen.getByPlaceholderText(/Search/, { name: 'q' });
    fireEvent.change(searchBox, { target: { value: 'Wizeline' } });
    fireEvent.submit(searchBox);

    expect(window.location.search).toBe('?q=Wizeline');
  });
});
