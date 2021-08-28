import React, { forwardRef } from 'react';

import { StyledUserAvatar } from './UserAvatar.styled';
import anonymousImage from './anonymous.svg';

export default forwardRef(function UserAvatar(
  { src = anonymousImage, name = 'Anonymous', ...rest },
  ref
) {
  return <StyledUserAvatar src={src} title={name} {...rest} ref={ref} />;
});
