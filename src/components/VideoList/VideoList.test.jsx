import React from 'react';
import renderer from 'react-test-renderer';

import { dummyData } from '../../test/mocks';

import VideoList from './VideoList';

describe('VideoList', () => {
  test('renders video list correctly', () => {
    const tree = renderer.create(<VideoList videos={dummyData.items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
