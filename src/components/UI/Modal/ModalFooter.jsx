import React from 'react';

import { StyledModalFooter } from './ModalFooter.styled';

export default function ModalContent({ children, ...props }) {
  return <StyledModalFooter {...props}>{children}</StyledModalFooter>;
}
