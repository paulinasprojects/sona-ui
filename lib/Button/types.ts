import { cva } from 'class-variance-authority';
export const ButtonVariants = cva(
  "inline-flex items-center justify-center tracking-[1px] gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-75 cursor-pointer  active:scale-90 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/80 shadow-[0px_8px_16px_0px_rgba(103,110,118,8%)]",
        secondary: "bg-secondary-foreground hover:bg-secondary-foreground/90 text-secondary shadow-[0px_8px_16px_0px_rgba(24,144,255,24%)]",
        danger: "bg-danger text-white hover:bg-danger/90  shadow-[0px_8px_16px_0px_rgba(255,72,66,24%)]",
        outline: "border bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        large: "h-10 rounded-sm px-6",
        small: "h-7 px-3",
        icon: "size-9",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    }
  }
)