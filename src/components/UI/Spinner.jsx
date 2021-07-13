import React from 'react';
import styled, { css } from 'styled-components';

import Rotate from './Rotate';

const StaticSpinner = styled.div`
  transform: translateZ(0);

  border-radius: 50%;
  border-top: 5px solid gray;
  border-right: 5px solid gray;
  border-bottom: 5px solid gray;
  background: transparent;
  width: 3.5rem;
  height: 3.5rem;

  ${({ theme }) => {
    const { colors } = theme;
    return css`
      border-left: 5px solid ${colors.tone};
    `;
  }}
`;

export default function Spinner({ duration = '1000ms', ...props }) {
  return (
    <Rotate duration={duration}>
      <StaticSpinner {...props} />
    </Rotate>
  );
}
