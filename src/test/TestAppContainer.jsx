import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function TestAppContainer({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
