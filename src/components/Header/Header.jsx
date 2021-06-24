import React, { useRef, useContext, useCallback, useEffect } from 'react';

import ToggleInput from '../ToggleInput';
import UserAvatar from '../UserAvatar';
import SearchInput from '../SearchInput';

import { YoutubeDataContext } from '../../contexts';
import { youtube } from '../../api';
import {
  StyledHeader,
  StyledContainer,
  StyledLeftPanel,
  StyledRightPanel,
} from './Header.styled';

export default function Header(props) {
  const { setVideos } = useContext(YoutubeDataContext);
  const queryRef = useRef('Wizeline');

  const doSearch = useCallback(() => {
    const query = queryRef.current;
    youtube.search({ query }).then(setVideos);
  }, [setVideos]);

  const onSearchInputChange = (e) => {
    queryRef.current = e.target.value;
  };

  const onSubmit = useCallback(
    (e) => {
      doSearch();
      e.preventDefault();
    },
    [doSearch]
  );

  useEffect(() => {
    doSearch();
  }, [doSearch]);

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
