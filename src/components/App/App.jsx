import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from '../../styles';

import {
  ThemeContextProvider,
  YoutubeQueryContextProvider,
  PortalContextProvider,
} from '../../providers';
import HomePage from '../../pages/Home';
import VideoDetailsPage from '../../pages/VideoDetails';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <YoutubeQueryContextProvider>
          <PortalContextProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/:id">
                  <VideoDetailsPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </PortalContextProvider>
        </YoutubeQueryContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
