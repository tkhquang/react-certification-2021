import { usePopper } from 'react-popper';

import useDialogState from './useDialogState';

export default function useMenuState({ referenceElementRef, ...args }) {
  const dialog = useDialogState(args);
  const popper = usePopper(referenceElementRef.current, dialog.dialogRef.current, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [-20, 5],
        },
      },
    ],
  });

  return {
    ...dialog,
    popper,
  };
}
