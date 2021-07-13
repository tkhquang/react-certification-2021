import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from '../../styles';
import {
  ThemeContextProvider,
  YoutubeQueryContextProvider,
  PortalContextProvider,
  UserContextProvider,
  FavoritesContextProvider,
} from '../../providers';
import {
  HomePage,
  NotFoundPage,
  FavoritesPage,
  VideoDetailsPage,
  FavoritesDetailsPage,
} from '../../pages';
import Layout from '../Layout';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <UserContextProvider>
          <FavoritesContextProvider>
            <YoutubeQueryContextProvider>
              <PortalContextProvider>
                <Layout>
                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <PrivateRoute exact path="/favorites">
                      <FavoritesPage />
                    </PrivateRoute>
                    <PrivateRoute exact path="/favorites/:id">
                      <FavoritesDetailsPage />
                    </PrivateRoute>
                    <Route exact path="/:id">
                      <VideoDetailsPage />
                    </Route>
                    <Route path="*">
                      <NotFoundPage />
                    </Route>
                  </Switch>
                </Layout>
              </PortalContextProvider>
            </YoutubeQueryContextProvider>
          </FavoritesContextProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
