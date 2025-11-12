import React from 'react';
import { useDialogContext } from './dialog';
import { cn } from '../lib/utils';
import { DialogTriggerProps } from './types';

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = useDialogContext();

    return (
      <button
        onClick={() => setOpen(!open)}
        ref={ref}
        {...props}
        className={cn("flex items-center justify-between w-full px-3 py-2 border rounded-sm text-sm",
          "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700",
          "hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-auto", className)}
      >
        {children}
      </button>
    )
  });

export { DialogTrigger };