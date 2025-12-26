import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    padded?: boolean;
}

export function Section({ className, container = true, padded = true, children, ...props }: SectionProps) {
    return (
        <section
            className={cn(
                "relative w-full",
                padded && "py-20 lg:py-32", // large padding for modern spacing
                className
            )}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
