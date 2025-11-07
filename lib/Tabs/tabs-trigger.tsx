import React from "react";
import { TabsTriggerProps } from './types';
import { useTabsContext } from './tabs';
import { cn } from "../lib/utils";

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ children, value, className, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === value;

    return (
      <button
        {...props}
        onClick={() => setActiveTab(value)}
        ref={ref}
        className={cn(
          "px-4 py-2 font-medium rounded-md transition-colors",
          isActive
            ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
            : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100",
          className
        )}
      >
        {children}
      </button>
    )
  }
)

export {
  TabsTrigger
}