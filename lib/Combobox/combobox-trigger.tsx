import React from 'react'
import { useComboboxContext } from './combobox'
import { cn } from '../lib/utils'
import { ComboboxTriggerProps } from './types';
import ChevronDown from '../Icons/chevron-down';

const ComboboxTrigger = React.forwardRef<HTMLButtonElement, ComboboxTriggerProps>(
  ({ className, placeholder, ...props }, ref) => {

    const { open, setOpen, value } = useComboboxContext();

    return (
      <button
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 border rounded-sm text-sm",
          "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700",
          "hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-auto",
          className
        )}
        onClick={() => setOpen(!open)}
        ref={ref}
        {...props}
      >
        <span className={cn(
          value ? "text-gray-900 dark:text-gray-100" : "text-gray-400"
        )}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-500 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
    )
  }
)

export { ComboboxTrigger }