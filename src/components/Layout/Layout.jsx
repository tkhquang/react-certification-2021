import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const StyledLayout = styled.main`
  //
`;

export default function Layout({ children, ...rest }) {
  return (
    <>
      <Header />
      <StyledLayout {...rest}>{children}</StyledLayout>
    </>
  );
}
