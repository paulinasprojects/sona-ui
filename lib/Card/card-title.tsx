import { cn } from "../lib/utils"

const CardTitle = ({ children, className, ...props }: React.ComponentProps<"h3">) => {
  return (
    <h3 className={cn(
      "text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100",
      className
    )}
      {...props}
    >
      {children}
    </h3>
  )
}

export { CardTitle }