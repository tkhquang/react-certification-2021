import styled, { css } from 'styled-components';

export const StyledUserAvatar = styled.div`
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin-left: 0.5rem;
  cursor: pointer;

  ${({ src }) => {
    return css`
      background-image: url(${src});
    `;
  }}
`;
