import React, { forwardRef, useState, useCallback, useEffect } from 'react';

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

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <StyledToggleInputLabel htmlFor={id}>
      <StyledToggleInput
        type="checkbox"
        role="switch checkbox"
        id={id}
        name={name}
        aria-label={name}
        checked={checked}
        onChange={onDoChange}
        aria-checked={checked}
        {...rest}
        ref={ref}
      />
      <StyledToggleInputSlider checked={checked} />
    </StyledToggleInputLabel>
  );
});
