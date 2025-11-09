import { VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { PillVariants } from './types';

const Pill = ({ className, variant, size, label, ...props }: React.ComponentProps<"span"> & VariantProps<typeof PillVariants> & {
  label: string;
}) => {
  return (
    <span className={cn(PillVariants({ variant, size, className, }))}
      {...props}
    >
      {label}
    </span>
  )
}


export { Pill, PillVariants }