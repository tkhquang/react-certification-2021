import { renderHook, act } from '@testing-library/react-hooks';

import useDialogState from './useDialogState';

describe('useDialogState', () => {
  test('toggles correctly', () => {
    const { result } = renderHook(() => useDialogState());
    const init = result.current.visible;

    act(() => {
      result.current.toggle();
    });

    expect(result.current.visible).toEqual(!init);
  });

  test('shows correctly', () => {
    const { result } = renderHook(() => useDialogState());

    act(() => {
      result.current.show();
    });

    expect(result.current.visible).toEqual(true);
  });

  test('hides correctly', () => {
    const { result } = renderHook(() => useDialogState());

    act(() => {
      result.current.hide();
    });

    expect(result.current.visible).toEqual(false);
  });
});
