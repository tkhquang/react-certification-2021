import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { YoutubeQueryContextProvider, ThemeContextProvider } from '../providers';

export default function TestAppContainer({ children }) {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <YoutubeQueryContextProvider>{children}</YoutubeQueryContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}
