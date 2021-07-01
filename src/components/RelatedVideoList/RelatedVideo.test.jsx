import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestAppContainer, mocks } from '../../test';

import RelatedVideo from './RelatedVideo';

describe('RelatedVideo', () => {
  const sampleVideoData = mocks.dummyData.items[0].snippet;
  beforeEach(() => {
    render(
      <TestAppContainer>
        <RelatedVideo {...sampleVideoData} />
      </TestAppContainer>
    );
  });

  test('renders with necessary contents', () => {
    expect(screen.getByText('Wizeline')).toBeInTheDocument();
    expect(screen.getByAltText('Wizeline')).toHaveAttribute(
      'src',
      sampleVideoData.thumbnails.medium.url
    );
  });
});
