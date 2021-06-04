import React from 'react';
import styled from 'styled-components';

import { Container } from '../UI';

import ToggleInput from '../ToggleInput';
import UserAvatar from '../UserAvatar';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: red;
`;

const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

function SearchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

const SearchInputLabel = styled.label`
  position: relative;
  display: flex;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledSearchInput = styled.input`
  padding-left: calc(0.25rem + 24px);
  height: 2.5rem;
`;

function SearchInput({ id, name, ...rest }) {
  return (
    <SearchInputLabel htmlFor="site-search">
      <StyledSearchIcon />

      <StyledSearchInput type="search" id={id} name={name} {...rest} />
    </SearchInputLabel>
  );
}

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
`;
const RightPanel = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header(props) {
  return (
    <StyledHeader {...props}>
      <StyledContainer>
        <LeftPanel>
          <SearchInput
            id="site-search"
            name="q"
            aria-label="Search through site content"
            placeholder="Search..."
          />
        </LeftPanel>
        <RightPanel>
          <ToggleInput id="theme-toggle" name="theme-toggle" />
          <UserAvatar />
        </RightPanel>
      </StyledContainer>
    </StyledHeader>
  );
}
