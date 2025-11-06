import React from 'react'
import { cn } from '../lib/utils'
import { useComboboxContext } from './combobox';
import { ComboboxInputProps } from './types';

const ComboboxInput = ({ placeholder, className, ...props }: React.HTMLAttributes<HTMLInputElement> & ComboboxInputProps) => {
  const { query, setQuery } = useComboboxContext();

  return (
    <input
      type='text'
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className={cn(
        "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-sm text-sm",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/40 bg-white dark:bg-gray-900",
        className
      )}
      {...props}
    />
  )
}

export { ComboboxInput }