import React from 'react';
import { render, screen } from '@testing-library/react';

import { YoutubeDataContext } from '../../contexts';
import { TestAppContainer } from '../../test';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <TestAppContainer>
        <YoutubeDataContext.Provider
          value={{
            videos: [],
            setVideos: () => {},
          }}
        >
          <Header />
        </YoutubeDataContext.Provider>
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
