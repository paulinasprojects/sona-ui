import React from 'react'
import { TabsListProps } from './types';
import { cn } from '../lib/utils';

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export { TabsList }