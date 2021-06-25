import React from 'react';
import renderer from 'react-test-renderer';

import { TestAppContainer, mocks } from '../../test';

import RelatedVideoList from './RelatedVideoList';

describe('RelatedVideoList', () => {
  test('renders video list correctly', () => {
    const tree = renderer
      .create(
        <TestAppContainer>
          <RelatedVideoList videos={mocks.dummyData.items} />
        </TestAppContainer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
