import { cn } from "../lib/utils"

const CardFooter = ({ children, className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex items-center p-6 [.border-t]:pt-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { CardFooter }