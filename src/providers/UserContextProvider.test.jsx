import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { TestAppContainer } from '../test';
import { UserContext } from '../contexts';
import { USER } from '../types';
import UserContextProvider from './UserContextProvider';

describe('UserContextProvider', () => {
  test('provides contexts properly', () => {
    const Inner = () => {
      const context = useContext(UserContext);

      expect(context).toHaveProperty('user', null);
      expect(context).toHaveProperty('isLoaded', expect.anything());
      return null;
    };

    render(
      <TestAppContainer>
        <UserContextProvider>
          <Inner />
        </UserContextProvider>
      </TestAppContainer>
    );
  });

  test('sets correctly', async () => {
    const data = {
      user: {
        id: '321',
        name: 'test',
      },
    };
    const { result } = renderHook(() => useContext(UserContext), {
      wrapper: ({ children }) => (
        <TestAppContainer>
          <UserContextProvider>{children}</UserContextProvider>
        </TestAppContainer>
      ),
    });

    act(() => {
      result.current.dispatch({
        type: USER.SET,
        payload: data,
      });
    });

    expect(result.current).toMatchObject(data);
  });
});
