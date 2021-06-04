import React, { forwardRef } from 'react';
import styled from 'styled-components';

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
  height: 2rem;
`;

export default forwardRef(function SearchInput({ id, name, ...rest }, ref) {
  return (
    <SearchInputLabel htmlFor={id}>
      <StyledSearchIcon />
      <StyledSearchInput type="search" id={id} name={name} {...rest} ref={ref} />
    </SearchInputLabel>
  );
});
