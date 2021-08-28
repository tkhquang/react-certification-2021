import React, { forwardRef } from 'react';

import styled, { css } from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: background 250ms linear;
  background-color: transparent;
  display: flex;

  ${({ visible, hideOnClickOutside }) => {
    if (visible && hideOnClickOutside) {
      return css`
        cursor: pointer;
      `;
    }
    return css`
      pointer-events: none;
    `;
  }}
`;

const MenuBackdrop = forwardRef((props, ref) => {
  return <StyledBackdrop {...props} ref={ref} />;
});

export default MenuBackdrop;
