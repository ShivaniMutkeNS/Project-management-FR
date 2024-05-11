import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "tailwind.config.jsflex tailwind.config.jsh-9 tailwind.config.jsw-full tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsborder-input tailwind.config.jsbg-transparent tailwind.config.jspx-3 tailwind.config.jspy-1 tailwind.config.jstext-sm tailwind.config.jsshadow-sm tailwind.config.jstransition-colors file:tailwind.config.jsborder-0 file:tailwind.config.jsbg-transparent file:tailwind.config.jstext-sm file:tailwind.config.jsfont-medium placeholder:tailwind.config.jstext-muted-foreground focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-1 focus-visible:tailwind.config.jsring-ring disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
