"use client";

import { Section } from "@/components/ui/Section";
import { Lightbulb, Palette, Code2, TestTube, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    { title: "Idea & Planning", description: "Understanding your goals, defining requirements, and planning the architecture for a scalable solution.", icon: Lightbulb },
    { title: "UI/UX Design", description: "Designing clean, intuitive, and user-focused interfaces that deliver great user experiences.", icon: Palette },
    { title: "Development", description: "Building fast, reliable applications using modern frameworks and AI-assisted development workflows.", icon: Code2 },
    { title: "Testing", description: "Thorough testing to ensure performance, security, and a smooth, bug-free experience.", icon: TestTube },
    { title: "Deployment", description: "Deploying and optimizing your product for production, ready to scale and grow.", icon: Rocket },
];

export function Process() {
    return (
        <Section id="process">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A clear, efficient process from idea to launch.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-border -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center bg-background md:bg-transparent p-4 rounded-xl shadow-sm md:shadow-none border md:border-none"
                        >
                            <div className="w-24 h-24 rounded-full bg-card border border-border flex items-center justify-center mb-6 shadow-sm z-10">
                                <step.icon className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
