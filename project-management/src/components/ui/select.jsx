import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsh-9 tailwind.config.jsw-full tailwind.config.jsitems-center tailwind.config.jsjustify-between tailwind.config.jswhitespace-nowrap tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsborder-input tailwind.config.jsbg-transparent tailwind.config.jspx-3 tailwind.config.jspy-2 tailwind.config.jstext-sm tailwind.config.jsshadow-sm tailwind.config.jsring-offset-background placeholder:tailwind.config.jstext-muted-foreground focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-1 focus:tailwind.config.jsring-ring disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50 [&>span]:tailwind.config.jsline-clamp-1",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon
        className="tailwind.config.jsh-4 tailwind.config.jsw-4 tailwind.config.jsopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jspy-1",
      className
    )}
    {...props}>
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jspy-1",
      className
    )}
    {...props}>
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.jsrelative tailwind.config.jsz-50 tailwind.config.jsmax-h-96 tailwind.config.jsmin-w-[8rem] tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsbg-popover tailwind.config.jstext-popover-foreground tailwind.config.jsshadow-md data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0 data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-95 data-[side=bottom]:tailwind.config.jsslide-in-from-top-2 data-[side=left]:tailwind.config.jsslide-in-from-right-2 data-[side=right]:tailwind.config.jsslide-in-from-left-2 data-[side=top]:tailwind.config.jsslide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:tailwind.config.jstranslate-y-1 data-[side=left]:tailwind.config.js-translate-x-1 data-[side=right]:tailwind.config.jstranslate-x-1 data-[side=top]:tailwind.config.js-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("tailwind.config.jsp-1", position === "popper" &&
          "tailwind.config.jsh-[var(--radix-select-trigger-height)] tailwind.config.jsw-full tailwind.config.jsmin-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "tailwind.config.jspx-2 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsfont-semibold",
      className
    )}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jsw-full tailwind.config.jscursor-default tailwind.config.jsselect-none tailwind.config.jsitems-center tailwind.config.jsrounded-sm tailwind.config.jspy-1.5 tailwind.config.jspl-2 tailwind.config.jspr-8 tailwind.config.jstext-sm tailwind.config.jsoutline-none focus:tailwind.config.jsbg-accent focus:tailwind.config.jstext-accent-foreground data-[disabled]:tailwind.config.jspointer-events-none data-[disabled]:tailwind.config.jsopacity-50",
      className
    )}
    {...props}>
    <span
      className="tailwind.config.jsabsolute tailwind.config.jsright-2 tailwind.config.jsflex tailwind.config.jsh-3.5 tailwind.config.jsw-3.5 tailwind.config.jsitems-center tailwind.config.jsjustify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      "tailwind.config.js-mx-1 tailwind.config.jsmy-1 tailwind.config.jsh-px tailwind.config.jsbg-muted",
      className
    )}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
