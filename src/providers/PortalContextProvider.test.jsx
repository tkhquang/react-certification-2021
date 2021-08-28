import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { TestAppContainer } from '../test';
import { PortalContext } from '../contexts';
import { PORTAL } from '../types';
import PortalContextProvider from './PortalContextProvider';

const Inner = () => {
  const context = useContext(PortalContext);

  expect(context).toHaveProperty('node', expect.anything());
  return null;
};

describe('PortalContextProvider', () => {
  test('provides contexts properly', () => {
    render(
      <TestAppContainer>
        <PortalContextProvider>
          <Inner />
        </PortalContextProvider>
      </TestAppContainer>
    );
  });

  test('sets correctly', async () => {
    const data = {
      node: document.body,
    };
    const { result } = renderHook(() => useContext(PortalContext), {
      wrapper: ({ children }) => (
        <TestAppContainer>
          <PortalContextProvider>{children}</PortalContextProvider>
        </TestAppContainer>
      ),
    });

    act(() => {
      result.current.dispatch({
        type: PORTAL.SET,
        payload: data,
      });
    });

    expect(result.current).toMatchObject(data);
  });
});
