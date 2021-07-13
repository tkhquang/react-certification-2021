import { renderHook, act } from '@testing-library/react-hooks';

import { mocks } from '../test';

import useYoutubeData from './useYoutubeData';

jest.mock('../api/youtube', () => {
  return {
    searchListByQuery: jest.fn(() => Promise.resolve(mocks.dummyData.items)),
  };
});

describe('useYoutubeData', () => {
  test('functions correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeData());

    act(() => {
      result.current.search();
    });

    await waitForNextUpdate();

    expect(result.current.videos).toEqual(expect.arrayContaining(mocks.dummyData.items));
  });
});
