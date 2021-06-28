import React from 'react';

import ToggleInput from '../ToggleInput';
import UserAvatar from '../UserAvatar';

import {
  StyledHeader,
  StyledContainer,
  StyledLeftPanel,
  StyledRightPanel,
} from './Header.styled';
import HeaderSearch from './HeaderSearch';

export default function Header(props) {
  return (
    <StyledHeader {...props}>
      <StyledContainer>
        <StyledLeftPanel>
          <HeaderSearch />
        </StyledLeftPanel>
        <StyledRightPanel>
          <ToggleInput id="theme-toggle" name="theme-toggle" />
          <UserAvatar />
        </StyledRightPanel>
      </StyledContainer>
    </StyledHeader>
  );
}
