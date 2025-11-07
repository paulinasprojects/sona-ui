import React from 'react'
import { TabsContentProps } from './types';
import { useTabsContext } from './tabs';
import { cn } from '../lib/utils';

const TabsContent = ({ value, children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & TabsContentProps) => {
  const { activeTab } = useTabsContext();
  if (activeTab !== value) return null;

  return (
    <div
      className={cn("mt-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { TabsContent }