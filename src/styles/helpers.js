import { css } from 'styled-components';

/**
 * `up` lets you apply style from a breakpoint.
 */
export function up(screen, styles) {
  return ({ theme }) => {
    const { screens } = theme;
    return css`
      @media only screen and (min-width: ${screens[screen] || screen}) {
        ${styles}
      }
    `;
  };
}

/**
 * `down` lets you apply style up to a breakpoint.
 */
export function down(screen, styles) {
  return ({ theme }) => {
    const { screens } = theme;
    return css`
      @media only screen and (max-width: ${screens[screen] || screen}) {
        ${styles}
      }
    `;
  };
}
