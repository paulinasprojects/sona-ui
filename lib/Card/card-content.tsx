import { cn } from "../lib/utils"

const CardContent = ({ children, className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "p-6 text-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { CardContent }