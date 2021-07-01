import React, { useContext, useCallback } from 'react';

import { ThemeContext } from '../../contexts';
import { THEME } from '../../types';

import ToggleInput from '../ToggleInput';

export default function HeaderThemeToggle(props) {
  const { mode, dispatch } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    dispatch({ type: THEME.TOGGLE });
  }, [dispatch]);

  return (
    <ToggleInput
      id="theme-toggle"
      name="theme-toggle"
      onChange={toggleTheme}
      value={mode}
      defaultChecked={mode === 'dark'}
      {...props}
    />
  );
}
