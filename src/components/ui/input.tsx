
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-isentric-700 bg-isentric-darkblue/90 px-3 py-2 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-isentric-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isentric-accent focus-visible:border-isentric-600 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 shadow-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
