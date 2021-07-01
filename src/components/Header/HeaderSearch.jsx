import React, { useState, useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import SearchInput from '../SearchInput';

export default function HeaderSearch() {
  const history = useHistory();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q');

  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(q);
  }, [q]);

  const onSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      history.push({
        pathname: '/',
        search: `?q=${query}`,
      });
      e.preventDefault();
    },
    [history, query]
  );

  return (
    <form role="search" noValidate onSubmit={onSubmit}>
      <SearchInput
        id="site-search"
        name="q"
        aria-label="Search through site content"
        placeholder="Search..."
        onChange={onSearchInputChange}
        defaultValue={q}
      />
    </form>
  );
}
