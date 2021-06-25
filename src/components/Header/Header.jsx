import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useYoutubeData } from '../../hooks';
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
  const { pathname } = useLocation();
  const { search } = useYoutubeData();
  const [query, setQuery] = useState('Wizeline');

  const doSearch = useCallback(() => {
    search({ query });
  }, [search, query]);

  const onSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      doSearch();
      e.preventDefault();
    },
    [doSearch]
  );

  useEffect(() => {
    if (pathname === '/') {
      doSearch();
    }
  }, [doSearch, pathname]);

  return (
    <StyledHeader {...props}>
      <StyledContainer>
        <StyledLeftPanel>
          <form role="search" noValidate onSubmit={onSubmit}>
            <SearchInput
              id="site-search"
              name="q"
              aria-label="Search through site content"
              placeholder="Search..."
              onChange={onSearchInputChange}
              value={query}
            />
          </form>
        </StyledLeftPanel>
        <StyledRightPanel>
          <ToggleInput id="theme-toggle" name="theme-toggle" />
          <UserAvatar />
        </StyledRightPanel>
      </StyledContainer>
    </StyledHeader>
  );
}
