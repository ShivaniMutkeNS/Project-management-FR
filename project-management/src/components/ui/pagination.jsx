import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

const Pagination = ({
  className,
  ...props
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(
      "tailwind.config.jsmx-auto tailwind.config.jsflex tailwind.config.jsw-full tailwind.config.jsjustify-center",
      className
    )}
    {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsflex-row tailwind.config.jsitems-center tailwind.config.jsgap-1",
      className
    )}
    {...props} />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("tailwind.config.js", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size,
    }), className)}
    {...props} />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("tailwind.config.jsgap-1 tailwind.config.jspl-2.5", className)}
    {...props}>
    <ChevronLeftIcon className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("tailwind.config.jsgap-1 tailwind.config.jspr-2.5", className)}
    {...props}>
    <span>Next</span>
    <ChevronRightIcon className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsh-9 tailwind.config.jsw-9 tailwind.config.jsitems-center tailwind.config.jsjustify-center",
      className
    )}
    {...props}>
    <DotsHorizontalIcon className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
    <span className="tailwind.config.jssr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
