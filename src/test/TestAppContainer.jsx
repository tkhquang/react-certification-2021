import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ThemeContextProvider,
  YoutubeQueryContextProvider,
  PortalContextProvider,
  UserContextProvider,
  FavoritesContextProvider,
} from '../providers';

export default function TestAppContainer({ children }) {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <UserContextProvider>
          <FavoritesContextProvider>
            <PortalContextProvider>
              <YoutubeQueryContextProvider>{children}</YoutubeQueryContextProvider>
            </PortalContextProvider>
          </FavoritesContextProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}
