import React, { useContext } from 'react';

import { useDialogState } from '../../hooks';
import { Drawer } from '../UI';
import { UserContext } from '../../contexts';

import HamburgerIcon from './HamburgerIcon';
import { StyledNavigationMenu, StyledNavigationLink } from './NavigationMenu.styled';

export default function HamburgerMenu() {
  const dialog = useDialogState();
  const { toggle } = dialog;
  const { user } = useContext(UserContext);

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
        <StyledNavigationLink to="/" onClick={toggle}>
          Home
        </StyledNavigationLink>
        {user && (
          <StyledNavigationLink to="/favorites" onClick={toggle}>
            Favorites
          </StyledNavigationLink>
        )}
      </Drawer>
      <StyledNavigationMenu onClick={toggle}>
        <HamburgerIcon />
      </StyledNavigationMenu>
    </>
  );
}
