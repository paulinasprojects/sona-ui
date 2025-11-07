import { cn } from "../lib/utils"

const CardDescription = ({ children, className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn("text-sm text-gray-500 dark:text-gray-400 mt-1", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { CardDescription }