import React from 'react';
import anonymousImage from './anonymous.svg';

import { StyledUserAvatar } from './UserAvatar.styled';

export default function UserAvatar({ src = anonymousImage, ...rest }) {
  return <StyledUserAvatar src={src} {...rest} />;
}
