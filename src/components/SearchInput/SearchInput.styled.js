import styled from 'styled-components';

import SearchIcon from './SearchIcon';

export const StyledSearchInputLabel = styled.label`
  position: relative;
  display: flex;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledSearchInput = styled.input`
  padding-left: calc(0.25rem + 24px);
  height: 2rem;
`;
