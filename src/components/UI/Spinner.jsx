import React from 'react';
import styled from 'styled-components';

import Rotate from './Rotate';

const StaticSpinner = styled.div`
  transform: translateZ(0);

  border-radius: 50%;
  border-top: 5px solid gray;
  border-right: 5px solid gray;
  border-bottom: 5px solid gray;
  border-left: 5px solid red;
  background: transparent;
  width: 3rem;
  height: 3rem;
`;

export default function Spinner({ duration = '1000ms', ...props }) {
  return (
    <Rotate duration={duration}>
      <StaticSpinner {...props} />
    </Rotate>
  );
}
