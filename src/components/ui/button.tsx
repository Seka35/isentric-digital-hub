
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-isentric-accent to-isentric-accent/80 text-white hover:from-isentric-accent/80 hover:to-isentric-accent shadow-sm hover:shadow-md shadow-isentric-accent/10",
        destructive:
          "bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground hover:shadow-md shadow-destructive/10",
        outline:
          "border border-isentric-700 bg-isentric-dark/60 text-isentric-200 hover:bg-isentric-800 hover:text-white hover:border-isentric-600 hover:shadow-sm",
        secondary:
          "bg-gradient-to-r from-isentric-800 to-isentric-700 text-isentric-200 hover:from-isentric-700 hover:to-isentric-800 hover:text-white shadow-sm",
        ghost: "hover:bg-isentric-800 hover:text-white text-isentric-200",
        link: "text-isentric-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
