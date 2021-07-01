import React from 'react';

import UserAvatar from '../UserAvatar';

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
