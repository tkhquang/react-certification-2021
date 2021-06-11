import React, { forwardRef } from 'react';

import {
  StyledSearchIcon,
  StyledSearchInputLabel,
  StyledSearchInput,
} from './SearchInput.styled';

export default forwardRef(function SearchInput({ id, name, ...rest }, ref) {
  return (
    <StyledSearchInputLabel htmlFor={id}>
      <StyledSearchIcon />
      <StyledSearchInput type="search" id={id} name={name} {...rest} ref={ref} />
    </StyledSearchInputLabel>
  );
});
