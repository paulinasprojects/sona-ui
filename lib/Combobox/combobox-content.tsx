import React, { useEffect, useRef } from 'react'
import { cn } from '../lib/utils'
import { useComboboxContext } from './combobox';
import { ComboboxContentProps } from './types';


const ComboboxContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & ComboboxContentProps) => {

  const { open, setOpen } = useComboboxContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "absolute left-0 z-50 mt-1 w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-md",
        "bg-white dark:bg-gray-900 border-gray-200 dakr:border-gray-700",
        "animate-in fade-in-80 slide-in-from-top-1",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )

}


export {
  ComboboxContent,
}