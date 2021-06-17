import styled, { css } from 'styled-components';

export const StyledUserAvatar = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin-left: 0.5rem;

  ${({ src }) => {
    return css`
      background-image: url(${src});
    `;
  }}
`;
