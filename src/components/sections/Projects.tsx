"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "AI English Speaking App",
        description: "An AI-powered application providing real-time pronunciation feedback and conversation practice.",
        tags: ["React", "OpenAI API", "Tailwind"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "E-Commerce Store",
        description: "Modern e-commerce platform with stripe integration, cart management, and admin dashboard.",
        tags: ["Next.js", "Stripe", "Prisma"],
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "SaaS Landing Page",
        description: "High-performance landing page for a SaaS product with dark mode and smooth animations.",
        tags: ["React", "Framer Motion", "Vite"],
        color: "from-orange-500 to-red-500",
    },
    {
        title: "Admin Dashboard",
        description: "Comprehensive analytics dashboard with data visualization and user management.",
        tags: ["Vue", "Chart.js", "Firebase"],
        color: "from-green-500 to-emerald-500",
    },
];

export function Projects() {
    return (
        <Section id="projects" className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A selection of projects demonstrating my skills in web and mobile development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden group" variant="default">
                        {/* Image Placeholder */}
                        <div className={`h-48 w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                            <span className="text-white font-bold text-2xl opacity-50 select-none">Preview</span>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Button size="sm" variant="outline" className="w-full gap-2" disabled>
                                    <ExternalLink size={16} /> Live Demo
                                </Button>
                                <Button size="sm" variant="ghost" className="w-full gap-2">
                                    <Github size={16} /> Code
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
