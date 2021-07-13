import React, { forwardRef, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import { PortalContext } from '../../../contexts';
import { useForkRef } from '../../../hooks';
import MenuBackdrop from './MenuBackdrop';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 250ms linear;
  cursor: default;
  z-index: 1;
  display: none;

  ${({ theme }) => {
    const { colors, spaces } = theme;
    return css`
      color: ${colors.onSurface};
      background-color: ${colors.surface};
      padding: ${spaces.md};
    `;
  }}

  &[data-enter] {
    display: flex;
  }

  &[data-leave] {
    display: none;
  }
`;

const Menu = forwardRef(({ children, dialogRef, popper, ...props }, ref) => {
  const { visible } = props;
  const { styles, attributes, update } = popper;
  const { node } = useContext(PortalContext);

  useEffect(() => {
    if (visible) {
      update();
    }
  }, [visible, update]);

  return (
    <>
      {ReactDOM.createPortal(
        <MenuBackdrop {...props}>
          <StyledMenu
            tabIndex={0}
            {...props}
            ref={useForkRef(dialogRef, ref)}
            role="dialog"
            aria-modal="true"
            style={styles.popper}
            {...attributes.popper}
          >
            {children}
          </StyledMenu>
        </MenuBackdrop>,
        node
      )}
    </>
  );
});

export default Menu;
