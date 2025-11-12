/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import { DialogContextValue, DialogProps } from './types';


const DialogContext = createContext<DialogContextValue | null>(null);

const Dialog = ({
  open: controlledOpen,
  onOpenChange,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & DialogProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(false);

  const isControlled = controlledOpen !== undefined;

  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback((next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  }, [isControlled, onOpenChange])

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <div className="relative w-full" {...props}>{children}</div>
    </DialogContext.Provider>
  )
}

function useDialogContext() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog subcomponents must be used inside <Dialog>");
  return ctx;
}

export {
  Dialog,
  useDialogContext,
}