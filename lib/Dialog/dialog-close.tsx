import React from 'react';
import { useDialogContext } from './dialog';
import { cn } from '../lib/utils';

const DialogClose = ({ className, children, ...props }: React.ComponentProps<"button">) => {
  const { open, setOpen } = useDialogContext();

  return (
    <button
      onClick={() => setOpen(!open)}
      {...props}
      className={cn("cursor-pointer px-2 border rounded-md hover:bg-accent transition-all duration-75 active:scale-90", className)}
    >
      {children}
    </button>
  )
}

export {
  DialogClose
};