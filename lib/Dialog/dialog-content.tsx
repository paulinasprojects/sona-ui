import { useDialogContext } from './dialog';
import { DialogContentProps } from './types';
import { cn } from '../lib/utils';
import React, { useEffect, useRef } from 'react';
import CloseIcon from '../Icons/close-icon';


const DialogContent = ({ className, overlayClassName, children, ...props }: React.HTMLAttributes<HTMLDivElement> & DialogContentProps) => {
  const { open, setOpen } = useDialogContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen, open])

  if (!open) return null;


  return (
    <div className={cn(
      "fixed inset-0 z-50 bg-black/50",
      overlayClassName,
    )}
    >
      <div className={cn(
        "bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg  p-8 shadow-lg duration-200 sm:max-w-lg dark:outline-1 dark:outline-white",
        className
      )}
        role='dialog'
        {...props}
        ref={ref}
      >
        {children}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3"
        >
          <CloseIcon className="size-4 cursor-pointer" />
        </button>
      </div>
    </div>
  )
}

export {
  DialogContent
};