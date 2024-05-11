import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<RadioGroupPrimitive.Root
      className={cn("tailwind.config.jsgrid tailwind.config.jsgap-2", className)}
      {...props}
      ref={ref} />)
  );
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "tailwind.config.jsaspect-square tailwind.config.jsh-4 tailwind.config.jsw-4 tailwind.config.jsrounded-full tailwind.config.jsborder tailwind.config.jsborder-primary tailwind.config.jstext-primary tailwind.config.jsshadow focus:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-1 focus-visible:tailwind.config.jsring-ring disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator
        className="tailwind.config.jsflex tailwind.config.jsitems-center tailwind.config.jsjustify-center">
        <CheckIcon
          className="tailwind.config.jsh-3.5 tailwind.config.jsw-3.5 tailwind.config.jsfill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>)
  );
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
