"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Sparkles, Layout } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Code,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs", "Auth Systems"],
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MongoDB", "Supabase", "Firebase"],
    },
    {
        title: "System & Tools",
        icon: Wrench,
        skills: ["Git & GitHub", "API Integration", "SaaS Architecture", "Admin Dashboards"],
    },
    {
        title: "AI & Automation",
        icon: Sparkles,
        skills: ["AI Integration", "OpenAI APIs", "n8n", "Make", "GoHighLevel", "OpenClaw", "Hermes Agent", "Zapier", "Workflow Automation"],
    },
    {
        title: "CMS",
        icon: Layout,
        skills: ["WordPress"],
    },
];

export function About() {
    return (
        <Section id="about" className="bg-secondary/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left – About Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            Most businesses lose time and money due to slow, manual processes
                            and systems that don&apos;t scale. I help solve that.
                        </p>
                        <p>
                            I&apos;m a Full-Stack Developer &amp; Automation Specialist focused on
                            building fast, scalable web and mobile applications, combined with
                            AI-powered automation to eliminate repetitive work and improve
                            efficiency.
                        </p>
                        <p>
                            Using technologies like React, Next.js, Node.js, and MongoDB, I
                            build production-ready digital products. With tools like n8n, Make,
                            and OpenAI APIs, I help businesses automate operations, reduce
                            manual workload, and scale without increasing team size.
                        </p>
                    </div>
                </motion.div>

                {/* Right – Skills by Category (2-col grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillCategories.map((cat, catIndex) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: catIndex * 0.07 }}
                        >
                            <Card variant="glass" className="p-4 h-full">
                                <div className="flex items-center gap-2 mb-3">
                                    <cat.icon className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                                        {cat.title}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
