import { useState, useEffect, useRef, useCallback } from 'react';

function lockDocumentScrolling() {
  document.body.style.overflow = 'hidden';
}

function restoreDocumentScrolling() {
  document.body.style.overflow = 'unset';
}

function useDialogState({
  animated = true,
  visible: initialVisible = false,
  hideOnEsc = true,
  hideOnClickOutside = true,
  preventBodyScroll = true,
} = {}) {
  const [visible, setVisible] = useState(initialVisible);
  const [animating, setAnimating] = useState(false);
  const dialogRef = useRef(null);

  const hide = () => setVisible(false);
  const show = () => setVisible(true);
  const toggle = () => setVisible((prevState) => !prevState);

  useEffect(() => {
    if (!preventBodyScroll) {
      return;
    }

    if (visible) {
      lockDocumentScrolling();
      return;
    }
    restoreDocumentScrolling();

    return () => {
      restoreDocumentScrolling();
    };
  }, [visible, preventBodyScroll]);

  const onOutsideClick = useCallback(
    ({ target }) => {
      if (!hideOnClickOutside) {
        return;
      }

      if (!dialogRef?.current?.contains(target)) {
        setVisible(false);
      }
    },
    [hideOnClickOutside, dialogRef]
  );

  useEffect(() => {
    window.addEventListener('mousedown', onOutsideClick);

    return () => {
      window.removeEventListener('mousedown', onOutsideClick);
    };
  }, [onOutsideClick]);

  useEffect(() => {
    if (!dialogRef?.current) {
      return;
    }
    setAnimating(true);
    if (visible) {
      dialogRef.current.dataset.enter = 'enter';
      delete dialogRef.current.dataset.leave;
      return;
    }
    dialogRef.current.dataset.leave = 'leave';
    delete dialogRef.current.dataset.enter;
  }, [visible]);

  const onTransitionEnd = useCallback(() => {
    setAnimating(false);
    if (!visible) {
      delete dialogRef.current.dataset.leave;
    }
  }, [visible]);

  useEffect(() => {
    const modal = dialogRef?.current;
    if (!modal) {
      return;
    }
    modal.addEventListener('transitionend', onTransitionEnd);

    return () => {
      modal.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [onTransitionEnd]);

  return {
    animated,
    visible,
    hide,
    show,
    toggle,
    hideOnEsc,
    hideOnClickOutside,
    preventBodyScroll,
    animating,
    dialogRef,
  };
}

export default useDialogState;
