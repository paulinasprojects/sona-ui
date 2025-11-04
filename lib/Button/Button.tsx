import { ButtonVariants } from "./types";
import { cn } from "../lib/utils";
import type { VariantProps } from "class-variance-authority";

export const Button = ({
  className,
  children,
  size,
  variant,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonVariants> & {
  isLoaidng?: boolean
}) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  )
}