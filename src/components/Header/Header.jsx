import React from 'react';

import UserAvatar from '../UserAvatar';
import { NavigationMenu } from '../NavigationMenu';

import HeaderSearch from './HeaderSearch';
import HeaderThemeToggle from './HeaderThemeToggle';
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
          <UserAvatar />
        </StyledRightPanel>
      </StyledContainer>
    </StyledHeader>
  );
}
