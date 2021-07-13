import React from 'react';
import { render, screen } from '@testing-library/react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { TestAppContainer } from '../../test';
import { UserContext } from '../../contexts';

import PrivateRoute from './PrivateRoute';

describe('PrivateRoute', () => {
  test('redirects on unauthenticated', () => {
    render(
      <TestAppContainer>
        <UserContext.Provider
          value={{
            user: null,
            isLoaded: true,
            dispatch: () => {},
          }}
        >
          <Redirect
            to={{
              pathname: '/private',
            }}
          />
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <PrivateRoute exact path="/private">
              Private
            </PrivateRoute>
          </Switch>
        </UserContext.Provider>
      </TestAppContainer>
    );

    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });

  test('allows authenticated', () => {
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
          <Redirect
            to={{
              pathname: '/private',
            }}
          />
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <PrivateRoute exact path="/private">
              Private
            </PrivateRoute>
          </Switch>
        </UserContext.Provider>
      </TestAppContainer>
    );

    expect(screen.getByText(/Private/)).toBeInTheDocument();
  });
});
