import { cn } from "../lib/utils"

const CardHeader = ({ className, children, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  )
}

export { CardHeader }