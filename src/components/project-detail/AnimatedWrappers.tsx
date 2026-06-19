"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

/* ── Reveal-on-scroll wrapper ────────────────────────────────── */
function Reveal({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── Stagger container for lists ─────────────────────────────── */
function Stagger({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function StaggerItem({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── Floating buttons ────────────────────────────────────────── */
function FloatingButtons() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* Scroll to top */}
            <motion.button
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-accent transition-colors"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5" />
            </motion.button>

            {/* WhatsApp */}
            <motion.a
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923369662100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/25 flex items-center justify-center text-white hover:bg-[#20ba5a] transition-colors"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="h-5 w-5" />
            </motion.a>
        </div>
    );
}

/* ── Exported wrappers used by the page ──────────────────────── */
export { Reveal, Stagger, StaggerItem, FloatingButtons };
