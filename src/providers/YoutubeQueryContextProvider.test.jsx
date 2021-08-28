import React, { useContext } from 'react';
import { render } from '@testing-library/react';

import { TestAppContainer } from '../test';
import { YoutubeQueryContext } from '../contexts';
import YoutubeQueryContextProvider from './YoutubeQueryContextProvider';

const Inner = () => {
  const context = useContext(YoutubeQueryContext);

  expect(context).toHaveProperty('query', expect.anything());
  return null;
};

describe('YoutubeQueryContextProvider', () => {
  test('provides contexts properly', () => {
    render(
      <TestAppContainer>
        <YoutubeQueryContextProvider>
          <Inner />
        </YoutubeQueryContextProvider>
      </TestAppContainer>
    );
  });
});
