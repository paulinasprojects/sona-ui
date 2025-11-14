import { cva } from "class-variance-authority";

const AlertVariants = cva(
  "relative w-full rounded-md border px-4 py-3 text-sm flex has-[>svg]:gap-x-3 gap-y-0.5 items-start",
  {
    variants: {
      variant: {
         default: "bg-card text-card-foreground",
         success: "bg-green-600 text-white",
         danger: "bg-danger text-white",
         info: "bg-secondary-foreground text-white",
         warning: "bg-orange-600 text-white", 
        },
      },
      defaultVariants: {
        variant: "default",
      }
  }
)

export {AlertVariants}