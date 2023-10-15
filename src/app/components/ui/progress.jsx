"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/app/lib/utils"

const Progress = React.forwardRef(({ className, value, duration, ...props }, ref) => (
    <ProgressPrimitive.Root
            ref={ref}
            className={cn("relative h-1 w-full overflow-hidden bg-background rounded-full", className)}
            {...props}>
        <ProgressPrimitive.Indicator
            className="h-full w-full flex-1 bg-foreground transition-all ease-linear"
            style={{ transform: `translateX(-${100 - (value || 0)}%)`, transitionDuration: duration }} />
    </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
