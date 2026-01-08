"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tags: string[];
    color: string;
    liveUrl?: string;
    githubUrl?: string;
    images?: string[];
    disabled?: boolean;
}

const projects: Project[] = [
    {
        title: "NexaShop – E-Commerce Website",
        description: "A full-featured e-commerce website with a custom admin panel for managing products, orders, and users. Built for real-world business use with a responsive and clean UI.",
        tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
        color: "from-indigo-600 to-purple-600",
        liveUrl: "http://nexashop.42web.io",
        githubUrl: "https://github.com/JasimMalook/nexashop-ecommerce",
        images: [
            "/projects/nexashop/home.png",
            "/projects/nexashop/nexashop-shop.png",
            "/projects/nexashop/nexashop-cart.png",
            "/projects/nexashop/nexashop-checkout.png",
            "/projects/nexashop/nexashop-admin-dashboard.png",
            "/projects/nexashop/nexashop-admin-products.png",
            "/projects/nexashop/nexashop-admin-catogary.png",
        ],
    },
    {
        title: "AI English Speaking App",
        description: "An AI-powered application providing real-time pronunciation feedback and conversation practice.",
        tags: ["React", "OpenAI API", "Tailwind"],
        color: "from-blue-500 to-cyan-500",
        // image: "/projects/nexashop/home.png", // Example placeholder
        images: [],
        disabled: true,
    },
    {
        title: "E-Commerce Store",
        description: "Modern e-commerce platform with stripe integration, cart management, and admin dashboard.",
        tags: ["Next.js", "Stripe", "Prisma"],
        color: "from-purple-500 to-pink-500",
        disabled: true,
    },
    {
        title: "SaaS Landing Page",
        description: "High-performance landing page for a SaaS product with dark mode and smooth animations.",
        tags: ["React", "Framer Motion", "Vite"],
        color: "from-orange-500 to-red-500",
        disabled: true,
    },
    {
        title: "Admin Dashboard",
        description: "Comprehensive analytics dashboard with data visualization and user management.",
        tags: ["Vue", "Chart.js", "Firebase"],
        color: "from-green-500 to-emerald-500",
        disabled: true,
    },
];

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
    const [current, setCurrent] = useState(0);

    const next = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-full w-full group/carousel overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={images[current]}
                    alt={`${title} - screenshot ${current + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 hover:bg-black/70"
                aria-label="Previous image"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10 hover:bg-black/70"
                aria-label="Next image"
            >
                <ChevronRight size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
}

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
                        <div className="relative h-56 md:h-64 w-full overflow-hidden">
                            {project.images && project.images.length > 1 ? (
                                <ProjectCarousel images={project.images} title={project.title} />
                            ) : project.images && project.images.length === 1 ? (
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className={`h-full w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                                    <span className="text-white font-bold text-2xl opacity-50 select-none">Preview</span>
                                </div>
                            )}
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.liveUrl ? (
                                    <Button asChild size="sm" variant="outline" className="w-full gap-2">
                                        <Link href={project.liveUrl} target="_blank">
                                            <ExternalLink size={16} /> Live Demo
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button size="sm" variant="outline" className="w-full gap-2" disabled>
                                        <ExternalLink size={16} /> Live Demo
                                    </Button>
                                )}

                                {project.githubUrl ? (
                                    <Button asChild size="sm" variant="ghost" className="w-full gap-2">
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github size={16} /> Code
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button size="sm" variant="ghost" className="w-full gap-2" disabled>
                                        <Github size={16} /> Code
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
