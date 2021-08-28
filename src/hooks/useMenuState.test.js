import { createRef } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import useMenuState from './useMenuState';

describe('useMenuState', () => {
  const ref = createRef();
  test('toggles correctly', () => {
    const { result } = renderHook(() => useMenuState({ referenceElementRef: ref }));
    const init = result.current.visible;

    act(() => {
      result.current.toggle();
    });

    expect(result.current.visible).toEqual(!init);
  });

  test('shows correctly', () => {
    const { result } = renderHook(() => useMenuState({ referenceElementRef: ref }));

    act(() => {
      result.current.show();
    });

    expect(result.current.visible).toEqual(true);
  });

  test('hides correctly', () => {
    const { result } = renderHook(() => useMenuState({ referenceElementRef: ref }));

    act(() => {
      result.current.hide();
    });

    expect(result.current.visible).toEqual(false);
  });
});
