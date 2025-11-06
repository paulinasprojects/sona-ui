import React, { useEffect, useRef } from "react"
import { SelectContentProps } from "./types"
import { cn } from "../lib/utils"
import { useSelectContext } from "./select"

const SelectContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & SelectContentProps) => {
  const { open, setOpen } = useSelectContext();
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
      ref={ref}
      className={cn(
        "absolute left-0 z-50 mt-1 w-full rounded-sm border shadow-md",
        "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700",
        "animate-in fade-in-80 slide-in-from-top-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
export {
  SelectContent
}