import React from 'react';
import { render, screen } from '@testing-library/react';

import { dummyData } from '../../test/mocks';

import Video from './Video';

describe('Video', () => {
  const sampleVideoData = dummyData.items[0].snippet;
  beforeEach(() => {
    render(<Video {...sampleVideoData} />);
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
