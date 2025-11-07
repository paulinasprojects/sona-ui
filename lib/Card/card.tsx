import { cn } from "../lib/utils"
// import { CardProps } from "./types"

const Card = ({ children, className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        "transition-all duration-200 hover:shadow-sm",
        className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card }