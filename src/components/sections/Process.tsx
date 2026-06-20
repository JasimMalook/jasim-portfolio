"use client";

import { Section } from "@/components/ui/Section";
import { Search, LayoutDashboard, Palette, Code2, TestTube, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Discovery & Strategy",
        description: "I start by understanding your business goals, target users, and core problems. Then I define a clear strategy and system architecture for a scalable and efficient solution.",
        icon: Search,
    },
    {
        title: "Planning & System Design",
        description: "I design the technical structure, database architecture, APIs, and user flows to ensure the product is scalable, maintainable, and optimized for real-world usage.",
        icon: LayoutDashboard,
    },
    {
        title: "UI/UX & Prototyping",
        description: "I create clean, modern, and user-focused interfaces that improve usability, conversions, and overall user experience.",
        icon: Palette,
    },
    {
        title: "Development & AI Integration",
        description: "I build the product using modern technologies like React, Next.js, and Node.js. I also integrate APIs, databases, and AI/automation tools such as OpenAI APIs, n8n, Make, and Zapier to create smart, efficient, and scalable systems.",
        icon: Code2,
    },
    {
        title: "Testing & Optimization",
        description: "I test performance, responsiveness, security, and user experience to ensure the product is stable, fast, and production-ready.",
        icon: TestTube,
    },
    {
        title: "Deployment & Scaling",
        description: "I deploy and optimize the application for production, ensuring it is ready to scale, handle real users, and support business growth.",
        icon: Rocket,
    },
];

export function Process() {
    return (
        <Section id="process">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A structured process to turn ideas into scalable digital products, SaaS platforms, and AI-powered automation systems.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-border -z-10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center bg-background md:bg-transparent p-4 rounded-xl shadow-sm md:shadow-none border md:border-none"
                        >
                            <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center mb-4 shadow-sm z-10">
                                <step.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-sm font-bold mb-2 leading-tight">{step.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
