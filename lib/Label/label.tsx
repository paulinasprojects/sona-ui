import React from 'react'
import { cn } from '../lib/utils';

interface LabelProps {
  label: string;
  className?: string;
}

const Label = ({ label, className, ...props }: React.ComponentProps<"label"> & LabelProps) => {
  return (
    <label className={cn("text-sm font-medium", className)} {...props}>{label}</label>
  )
}

export { Label }