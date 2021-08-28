import React, { forwardRef } from 'react';

import { StyledTextInputLabel, StyledTextInput } from './TextInput.styled';

export default forwardRef(function TextInput({ id, name, ...rest }, ref) {
  return (
    <StyledTextInputLabel htmlFor={id}>
      <StyledTextInput type="text" id={id} name={name} {...rest} ref={ref} />
    </StyledTextInputLabel>
  );
});
