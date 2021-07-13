import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { TestAppContainer } from '../test';
import { ThemeContext } from '../contexts';
import { THEME } from '../types';
import ThemeContextProvider from './ThemeContextProvider';

const Inner = () => {
  const context = useContext(ThemeContext);

  expect(context).toHaveProperty('mode', expect.anything());
  return null;
};

describe('ThemeContextProvider', () => {
  test('provides contexts properly', () => {
    render(
      <TestAppContainer>
        <ThemeContextProvider>
          <Inner />
        </ThemeContextProvider>
      </TestAppContainer>
    );
  });

  test('sets correctly', async () => {
    const data = 'light';
    const { result } = renderHook(() => useContext(ThemeContext), {
      wrapper: ({ children }) => (
        <TestAppContainer>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </TestAppContainer>
      ),
    });

    act(() => {
      result.current.dispatch({
        type: THEME.SET,
        payload: {
          mode: data,
        },
      });
    });

    expect(result.current.mode).toBe(data);
  });

  test('toggles correctly', async () => {
    const { result } = renderHook(() => useContext(ThemeContext), {
      wrapper: ({ children }) => (
        <TestAppContainer>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </TestAppContainer>
      ),
    });

    const init = result.current.mode;

    act(() => {
      result.current.dispatch({
        type: THEME.TOGGLE,
      });
    });

    expect(result.current.mode).not.toBe(init);
  });
});
