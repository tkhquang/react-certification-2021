import { renderHook, act } from '@testing-library/react-hooks';

import { mocks } from '../test';

import useRequest from './useRequest';

const success = jest.fn(() => Promise.resolve(mocks.dummyData.items));
const error = jest.fn(() => Promise.reject(new Error('Test')));

describe('useYoutubeData', () => {
  test('functions correctly on success', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useRequest({
        request: success,
      })
    );

    act(() => {
      result.current.fetchData();
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual(expect.arrayContaining(mocks.dummyData.items));
  });

  test('functions correctly on error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useRequest({
        request: error,
      })
    );

    act(() => {
      result.current.fetchData();
    });

    await waitForNextUpdate();

    expect(result.current.error).not.toEqual(null);
  });
});
