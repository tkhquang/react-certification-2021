import React, { forwardRef, useContext } from 'react';
import ReactDOM from 'react-dom';

import { PortalContext } from '../../../contexts';
import { useForkRef } from '../../../hooks';

import { StyledModal } from './Modal.styled';
import ModalBackdrop from './ModalBackdrop';

const Modal = forwardRef(({ children, dialogRef, ...props }, ref) => {
  const { node } = useContext(PortalContext);

  return ReactDOM.createPortal(
    <ModalBackdrop {...props}>
      <StyledModal
        tabIndex={0}
        {...props}
        ref={useForkRef(dialogRef, ref)}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </StyledModal>
    </ModalBackdrop>,
    node
  );
});

export default Modal;
