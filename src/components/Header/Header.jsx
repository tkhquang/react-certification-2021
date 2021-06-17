import React from 'react';

import ToggleInput from '../ToggleInput';
import UserAvatar from '../UserAvatar';
import SearchInput from '../SearchInput';

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
          <SearchInput
            id="site-search"
            name="q"
            aria-label="Search through site content"
            placeholder="Search..."
          />
        </StyledLeftPanel>
        <StyledRightPanel>
          <ToggleInput id="theme-toggle" name="theme-toggle" />
          <UserAvatar />
        </StyledRightPanel>
      </StyledContainer>
    </StyledHeader>
  );
}
