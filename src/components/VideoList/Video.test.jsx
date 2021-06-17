import React from 'react';
import renderer from 'react-test-renderer';

import { dummyData } from '../../test/mocks';

import Video from './Video';

describe('Video', () => {
  test('renders with necessary contents', () => {
    const sampleVideoData = dummyData.items[0].snippet;
    const tree = renderer.create(<Video {...sampleVideoData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
