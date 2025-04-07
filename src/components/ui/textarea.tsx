
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-xl border border-isentric-700 bg-isentric-darkblue/90 px-3 py-2 text-base text-white ring-offset-background placeholder:text-isentric-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isentric-accent focus-visible:border-isentric-600 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-300 shadow-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
