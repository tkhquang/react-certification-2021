import styled, { css } from 'styled-components';

import { TextInput } from '../TextInput';

export const StyledUsernameInput = styled(TextInput)`
  width: 100%;
`;

export const StyledPasswordInput = styled(TextInput)`
  width: 100%;

  ${({ theme }) => {
    const { spaces } = theme;
    return css`
      margin-top: ${spaces.md};
    `;
  }}
`;
