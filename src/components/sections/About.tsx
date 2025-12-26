"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Code, Database, Sparkles, Terminal, Cpu, Globe } from "lucide-react";

const skills = [
    { name: "React / Next.js", icon: Code },
    { name: "Node.js / Express", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "Firebase", icon: Globe }, // Using Globe as placeholder or Database
    { name: "REST APIs", icon: Globe },
    { name: "AI Tools", icon: Sparkles },
];

export function About() {
    return (
        <Section id="about" className="bg-secondary/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <div className="space-y-4 text-muted-foreground text-lg">
                        <p>
                            I’m a Full-Stack Developer focused on building clean, fast, and scalable web and mobile applications.
                            I work with modern technologies like React, Next.js, Node.js, and MongoDB to turn ideas into production-ready products.
                        </p>
                        <p>
                            I also use AI-assisted tools to improve development speed, code quality, and problem-solving,
                            helping businesses launch reliable and efficient solutions.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <Card
                            key={skill.name}
                            variant="glass"
                            className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <skill.icon className="w-8 h-8 text-primary" />
                            <span className="font-medium text-center">{skill.name}</span>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
