import { cva } from 'class-variance-authority';

const PillVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors ring-1 ring-inset rounded-full tracking-[1px] whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white dark:bg-foreground dark:text-muted",
        secondary: "bg-secondary-foreground text-white",
        success: "bg-green-500 text-white",
        danger: "bg-danger text-white",
      },
      size: {
        default: "px-2 py-1 text-xs",
        large: "px-3 py-1.5 text-sm",
        small: "px-2 py-0.5 text-xs",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    }
  }
);

export {PillVariants}