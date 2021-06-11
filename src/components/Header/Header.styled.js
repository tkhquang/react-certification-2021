import styled from 'styled-components';

import { Container } from '../UI';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: red;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const StyledLeftPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRightPanel = styled.div`
  display: flex;
  align-items: center;
`;
