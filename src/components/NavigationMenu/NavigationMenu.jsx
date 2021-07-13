import React from 'react';

import { useDialogState } from '../../hooks';
import { Drawer } from '../UI';

import HamburgerIcon from './HamburgerIcon';
import { StyledNavigationMenu, StyledNavigationLink } from './NavigationMenu.styled';

export default function HamburgerMenu() {
  const dialog = useDialogState();
  const { toggle } = dialog;
  return (
    <>
      <Drawer
        {...dialog}
        style={{
          minWidth: '250px',
        }}
        aria-labelledby="Navigation"
        aria-describedby="Navigation menu"
      >
        <StyledNavigationLink to="/">Home</StyledNavigationLink>
      </Drawer>
      <StyledNavigationMenu onClick={() => toggle()}>
        <HamburgerIcon />
      </StyledNavigationMenu>
    </>
  );
}
