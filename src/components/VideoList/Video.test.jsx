import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestAppContainer, mocks } from '../../test';

import Video from './Video';

describe('Video', () => {
  const sampleVideoData = mocks.dummyData.items[0].snippet;
  beforeEach(() => {
    render(
      <TestAppContainer>
        <Video {...sampleVideoData} />
      </TestAppContainer>
    );
  });

  test('renders with necessary contents', () => {
    expect(screen.getByText('Wizeline')).toBeInTheDocument();
    expect(screen.getByText(/Wizeline transforms how/)).toBeInTheDocument();
    expect(screen.getByAltText('Wizeline')).toHaveAttribute(
      'src',
      sampleVideoData.thumbnails.high.url
    );
  });
});
