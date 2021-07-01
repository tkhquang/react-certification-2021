import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ToggleInput from './ToggleInput';

describe('ToggleInput', () => {
  beforeEach(() => {
    render(<ToggleInput id="toggle" name="toggle-test" />);
  });

  test('renders with correct attributes', () => {
    expect(screen.getByRole('switch', { name: 'toggle-test' })).toBeInTheDocument();
  });

  test('updates states correctly', () => {
    const toggle = screen.getByRole('switch', { name: 'toggle-test' });
    const initialChecked = toggle.getAttribute('aria-checked');
    const expectedNextChecked = initialChecked === 'true' ? 'false' : 'true';

    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe(expectedNextChecked);
  });
});
