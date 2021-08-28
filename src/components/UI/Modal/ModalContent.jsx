import React from 'react';

import { StyledModalContent } from './ModalContent.styled';

export default function ModalContent({ children, ...props }) {
  return <StyledModalContent {...props}>{children}</StyledModalContent>;
}
