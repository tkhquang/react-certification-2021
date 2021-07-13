import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';

import { TestAppContainer } from '../../test';
import { UserContext } from '../../contexts';

import HeaderUserManagement from './HeaderUserManagement';

describe('HeaderUserManagement', () => {
  test('shows Login button when user is not logged in', () => {
    render(
      <TestAppContainer>
        <UserContext.Provider
          value={{
            user: null,
            isLoaded: true,
            dispatch: () => {},
          }}
        >
          <HeaderUserManagement />
        </UserContext.Provider>
      </TestAppContainer>
    );

    const userAvatar = screen.getByTitle(/Anonymous/);
    act(() => {
      fireEvent.click(userAvatar);
    });

    expect(
      screen.getByRole('button', {
        name: /Login/,
      })
    ).toBeVisible();
  });

  test('shows Logout button when user is not logged in', () => {
    render(
      <TestAppContainer>
        <UserContext.Provider
          value={{
            user: {
              id: '123',
            },
            isLoaded: true,
            dispatch: () => {},
          }}
        >
          <HeaderUserManagement />
        </UserContext.Provider>
      </TestAppContainer>
    );

    const userAvatar = screen.getByTitle(/Anonymous/);
    act(() => {
      fireEvent.click(userAvatar);
    });

    expect(
      screen.getByRole('button', {
        name: /Logout/,
      })
    ).toBeVisible();
  });
});
