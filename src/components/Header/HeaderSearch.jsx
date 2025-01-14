import React, { useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { YoutubeQueryContext } from '../../contexts';
import { YOUTUBE_QUERY } from '../../types';

import SearchInput from '../SearchInput';

export default function HeaderSearch() {
  const { query, dispatch } = useContext(YoutubeQueryContext);
  const [q, setQ] = useState(query);
  const { push } = useHistory();

  const onSearchInputChange = (e) => {
    setQ(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      dispatch({
        type: YOUTUBE_QUERY.SET,
        payload: {
          query: q,
        },
      });
      push('/');
      e.preventDefault();
    },
    [dispatch, push, q]
  );

  return (
    <form role="search" noValidate onSubmit={onSubmit}>
      <SearchInput
        id="site-search"
        name="q"
        aria-label="Search through site content"
        placeholder="Search..."
        onChange={onSearchInputChange}
        value={q}
      />
    </form>
  );
}
