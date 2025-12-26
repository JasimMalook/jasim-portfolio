"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "glass" | "outline";
}

export function Card({ className, variant = "glass", children, ...props }: CardProps) {
    const variants = {
        default: "bg-card text-card-foreground shadow-sm",
        glass: "glass border border-white/10 shadow-xl backdrop-blur-md bg-white/5 dark:bg-black/20 hover:border-primary/30 transition-colors",
        outline: "border border-border bg-transparent",
    };

    return (
        <motion.div
            className={cn("rounded-2xl p-6 overflow-hidden", variants[variant], className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
