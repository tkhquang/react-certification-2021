import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Rotate = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['duration'].includes(prop) && defaultValidatorFn(prop),
})`
  animation-name: ${rotateAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  ${({ duration = '5000ms' }) => {
    return css`
      animation-duration: ${duration};
    `;
  }}
`;

export default Rotate;
