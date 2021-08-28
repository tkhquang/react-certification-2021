import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { TestAppContainer, mocks } from '../test';
import { FavoritesContext } from '../contexts';
import { FAVORITES } from '../types';
import FavoritesContextProvider from './FavoritesContextProvider';

const Inner = () => {
  const context = useContext(FavoritesContext);

  expect(context).toHaveProperty('favorites', expect.anything());
  expect(context).toHaveProperty('isLoaded', expect.anything());
  return null;
};

describe('FavoritesContextProvider', () => {
  test('provides contexts properly', () => {
    render(
      <TestAppContainer>
        <FavoritesContextProvider>
          <Inner />
        </FavoritesContextProvider>
      </TestAppContainer>
    );
  });

  test('sets correctly', async () => {
    const data = [mocks.dummyData.items[1]];
    const { result } = renderHook(() => useContext(FavoritesContext), {
      wrapper: ({ children }) => (
        <TestAppContainer>
          <FavoritesContextProvider>{children}</FavoritesContextProvider>
        </TestAppContainer>
      ),
    });

    act(() => {
      result.current.dispatch({
        type: FAVORITES.SET,
        payload: {
          videos: data,
        },
      });
    });

    expect(result.current.favorites).toMatchObject(data);
  });

  test('adds correctly', async () => {
    const data = mocks.dummyData.items[0];
    const { result } = renderHook(() => useContext(FavoritesContext), {
      wrapper: ({ children }) => (
        <TestAppContainer>
          <FavoritesContextProvider>{children}</FavoritesContextProvider>
        </TestAppContainer>
      ),
    });

    act(() => {
      result.current.dispatch({
        type: FAVORITES.ADD,
        payload: {
          video: data,
        },
      });
    });

    expect(result.current.favorites).toEqual(expect.arrayContaining([data]));
  });

  test('removes correctly', async () => {
    const data = mocks.dummyData.items[1];
    const { result } = renderHook(() => useContext(FavoritesContext), {
      wrapper: ({ children }) => (
        <TestAppContainer>
          <FavoritesContextProvider>{children}</FavoritesContextProvider>
        </TestAppContainer>
      ),
    });

    act(() => {
      result.current.dispatch({
        type: FAVORITES.ADD,
        payload: {
          video: data,
        },
      });
    });

    expect(result.current.favorites).toEqual(expect.arrayContaining([data]));

    act(() => {
      result.current.dispatch({
        type: FAVORITES.REMOVE,
        payload: {
          video: {
            ...data,
            id: data.id.videoId,
          },
        },
      });
    });

    expect(result.current.favorites).not.toEqual(expect.arrayContaining([data]));
  });
});
