import { AlertVariants } from './types';
import { cn } from '../lib/utils';
import React from 'react';
import { VariantProps } from 'class-variance-authority';


const Alert = ({ children, className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof AlertVariants>) => {
  return (
    <>
      <div
        role="alert"
        className={cn(AlertVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

export {
  Alert
};