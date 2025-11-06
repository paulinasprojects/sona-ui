import React from "react";
import { cn } from "../lib/utils";
import { useSelectContext } from "./select"
import { SelectOptionProps } from "./types"

const SelectOption = React.forwardRef<HTMLDivElement, SelectOptionProps>(
  ({ className, children, value, ...props }, ref) => {
    const { setValue, value: selectedValue } = useSelectContext();

    const isSelected = selectedValue == value;

    return (
      <div
        onClick={() => setValue(value)}
        ref={ref}
        {...props}
        className={cn(
          "px-3 py-2 text-sm cursor-pointer transition-colors rounded-[4px] mx-1 my-0.5",
          isSelected ? "bg-secondary-foreground text-white" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800",
          className
        )}
      >
        {children}
      </div>
    )
  }
)

export { SelectOption }