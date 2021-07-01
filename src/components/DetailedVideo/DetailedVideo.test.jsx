import React from 'react';
import { render } from '@testing-library/react';

import { TestAppContainer, mocks } from '../../test';
import DetailedVideo from './DetailedVideo';

jest.mock('../../api/youtube', () => {
  return {
    searchListById: jest.fn(() => Promise.resolve(mocks.dummyData.items)),
  };
});

describe('DetailedVideo', () => {
  test('renders without crashing', () => {
    render(
      <TestAppContainer>
        <DetailedVideo id="video_id_test" />
      </TestAppContainer>
    );
  });
});
