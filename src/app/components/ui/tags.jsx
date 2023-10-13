import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils"

const tagsVariants = cva("inline-flex items-start border px-1.5 pt-.5 pb-1 text-sm font-semibold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-foreground bg-foreground text-background hover:bg-primary/80",
                secondary: "border-emerald-300 bg-emerald-300 text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Tags({ className, variant, ...props}) {

    return (<div className={cn(tagsVariants({ variant }), className)} {...props} />);
}

export { Tags, tagsVariants }
