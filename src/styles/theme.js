/* eslint-disable no-unused-vars */
import { hsl, mix } from 'polished';

const base = {
  screens: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    container: '1440px',
  },
  spaces: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem',
    '3xl': '3rem',
    '4xl': '3.5rem',
    '5xl': '4rem',
    '6xl': '4.5rem',
    '7xl': '5rem',
    headerHeight: '72px',
  },
  radii: {
    sm: '4px',
    md: '6px',
    lg: '10px',
  },
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
};

// Basic hue values
const RED_HUE = 360;
const BLUE_HUE = 240;
const GREEN_HUE = 120;

const LIGHT_HUE = 220;
const light = {
  id: 'light',
  ...base,
  colors: {
    tone: hsl(LIGHT_HUE, 1.0, 0.5),
    background: hsl(LIGHT_HUE, 0.5, 0.95),
    darken: mix(0.8, hsl(LIGHT_HUE, 0.5, 0.95), '#000000'),
    onBackground: hsl(LIGHT_HUE, 0.5, 0.3),
    primary: hsl(LIGHT_HUE, 0.5, 0.5),
    secondary: hsl(LIGHT_HUE, 0.45, 0.75),
    onSecondary: hsl(LIGHT_HUE, 0.5, 0.3),
    surface: hsl(LIGHT_HUE, 0.5, 0.9),
    onSurface: hsl(LIGHT_HUE, 0.5, 0.35),
    error: hsl(RED_HUE, 0.5, 0.4),
    success: hsl(GREEN_HUE, 0.5, 0.4),
  },
};

const DARK_HUE = 200;
const dark = {
  id: 'dark',
  ...base,
  colors: {
    tone: hsl(DARK_HUE, 1, 0.5),
    background: hsl(DARK_HUE, 0.5, 0.15),
    darken: mix(0.8, hsl(DARK_HUE, 0.5, 0.15), '#000000'),
    onBackground: hsl(DARK_HUE, 0.5, 0.8),
    primary: hsl(DARK_HUE, 0.5, 0.7),
    onPrimary: hsl(DARK_HUE, 0.5, 0.1),
    secondary: hsl(DARK_HUE, 0.6, 0.25),
    onSecondary: hsl(DARK_HUE, 0.2, 0.85),
    surface: hsl(DARK_HUE, 0.5, 0.18),
    onSurface: hsl(DARK_HUE, 0.5, 0.85),
    error: hsl(RED_HUE, 0.5, 0.7),
    success: hsl(GREEN_HUE, 0.5, 0.6),
  },
};

export { dark, light };
