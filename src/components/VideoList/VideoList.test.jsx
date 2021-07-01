import React from 'react';

import renderer from 'react-test-renderer';

import { TestAppContainer, mocks } from '../../test';

import VideoList from './VideoList';

describe('VideoList', () => {
  test('renders video list correctly', () => {
    const tree = renderer
      .create(
        <TestAppContainer>
          <VideoList videos={mocks.dummyData.items} />
        </TestAppContainer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
