import React, { forwardRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import { PortalContext } from '../../../contexts';
import { useForkRef } from '../../../hooks';

import DrawerBackdrop from './DrawerBackdrop';

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 250ms linear;
  cursor: default;
  transform: translateX(-100%);

  ${({ theme }) => {
    const { colors, spaces } = theme;
    return css`
      color: ${colors.onSecondary};
      background-color: ${colors.secondary};
      padding: ${spaces.md};
    `;
  }}

  &[data-enter] {
    transform: translateX(0);
  }

  &[data-leave] {
    transform: translateX(-100%);
  }
`;

const Modal = forwardRef(({ children, dialogRef, ...props }, ref) => {
  const { node } = useContext(PortalContext);

  return ReactDOM.createPortal(
    <DrawerBackdrop {...props}>
      <StyledModal
        tabIndex={0}
        {...props}
        ref={useForkRef(dialogRef, ref)}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </StyledModal>
    </DrawerBackdrop>,
    node
  );
});

export default Modal;
