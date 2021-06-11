import React, { forwardRef, useState, useCallback } from 'react';

import {
  StyledToggleInputLabel,
  StyledToggleInputSlider,
  StyledToggleInput,
} from './ToggleInput.styled';

export default forwardRef(function ToggleInput(
  { id, name, onChange, defaultChecked = false, ...rest },
  ref
) {
  const [checked, setChecked] = useState(defaultChecked);

  const onDoChange = useCallback(
    (e) => {
      e.target.checked = !e.target.checked;
      setChecked(!e.target.checked);
      if (typeof onChange === 'function') {
        onChange(e);
      }
    },
    [onChange]
  );

  return (
    <StyledToggleInputLabel htmlFor={id}>
      <StyledToggleInput
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        {...rest}
        onChange={onDoChange}
        ref={ref}
      />
      <StyledToggleInputSlider checked={checked} />
    </StyledToggleInputLabel>
  );
});
