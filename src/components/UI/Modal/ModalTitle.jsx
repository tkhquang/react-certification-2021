import React from 'react';

import { StyledModalTitle, StyledModalClose } from './ModalTitle.styled';

export default function ModalTitle({ children, ...props }) {
  const { hide } = props;
  return (
    <StyledModalTitle {...props}>
      {children}
      <StyledModalClose onClick={hide}>X</StyledModalClose>
    </StyledModalTitle>
  );
}
