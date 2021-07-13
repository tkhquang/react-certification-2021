import React from 'react';

import Header from '../Header';

import { StyledLayout } from './Layout.styled';

export default function Layout({ children, ...rest }) {
  return (
    <>
      <Header />
      <StyledLayout {...rest}>{children}</StyledLayout>
    </>
  );
}
