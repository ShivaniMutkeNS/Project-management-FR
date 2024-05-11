import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn(
        "tailwind.config.jsanimate-pulse tailwind.config.jsrounded-md tailwind.config.jsbg-primary/10",
        className
      )}
      {...props} />)
  );
}

export { Skeleton }
