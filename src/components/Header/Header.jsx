import React from 'react';

import { NavigationMenu } from '../NavigationMenu';

import HeaderSearch from './HeaderSearch';
import HeaderThemeToggle from './HeaderThemeToggle';
import HeaderUserManagement from './HeaderUserManagement';
import {
  StyledHeader,
  StyledContainer,
  StyledLeftPanel,
  StyledRightPanel,
} from './Header.styled';

export default function Header(props) {
  return (
    <StyledHeader {...props}>
      <StyledContainer>
        <StyledLeftPanel>
          <NavigationMenu />
          <HeaderSearch />
        </StyledLeftPanel>
        <StyledRightPanel>
          <HeaderThemeToggle />
          <HeaderUserManagement />
        </StyledRightPanel>
      </StyledContainer>
    </StyledHeader>
  );
}
