"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectDetail } from "@/data/projects";

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
    const [current, setCurrent] = useState(0);

    const handleNext = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-full w-full group/carousel overflow-hidden touch-pan-y">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(_, info) => {
                        const threshold = 50;
                        if (info.offset.x > threshold) {
                            handlePrev();
                        } else if (info.offset.x < -threshold) {
                            handleNext();
                        }
                    }}
                >
                    <img
                        src={images[current]}
                        alt={`${title} - screenshot ${current + 1}`}
                        className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                    />
                </motion.div>
            </AnimatePresence>

            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 md:group-hover/carousel:opacity-100 transition-all duration-300 z-10 hover:bg-black/70 hover:scale-110 active:scale-95 hidden md:flex"
                aria-label="Previous image"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 md:group-hover/carousel:opacity-100 transition-all duration-300 z-10 hover:bg-black/70 hover:scale-110 active:scale-95 hidden md:flex"
                aria-label="Next image"
            >
                <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrent(i);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function FeaturedProjectCard({ project }: { project: ProjectDetail }) {
    return (
        <Card className="overflow-hidden group mb-12" variant="default">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto lg:h-[420px] w-full overflow-hidden">
                    {project.images && project.images.length > 1 ? (
                        <ProjectCarousel images={project.images} title={project.title} />
                    ) : project.images && project.images.length === 1 ? (
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className={`h-full w-full bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center`}>
                            <span className="text-white font-bold text-2xl opacity-50 select-none">Preview</span>
                        </div>
                    )}
                </div>

                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                            Featured Client Project
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>

                    <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="md" className="gap-2">
                            <Link href={`/projects/${project.slug}`}>
                                View Case Study <ArrowRight size={16} />
                            </Link>
                        </Button>

                        {project.liveUrl && (
                            <Button asChild size="md" variant="outline" className="gap-2">
                                <Link href={project.liveUrl} target="_blank">
                                    <ExternalLink size={16} /> Live Website
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}

function ProjectCard({ project }: { project: ProjectDetail }) {
    return (
        <Card className="overflow-hidden group flex flex-col" variant="default">
            <div className="relative aspect-video w-full overflow-hidden">
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

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto">
                    <Button asChild size="sm" className="gap-2">
                        <Link href={`/projects/${project.slug}`}>
                            View Details <ArrowRight size={14} />
                        </Link>
                    </Button>

                    {project.liveUrl ? (
                        <Button asChild size="sm" variant="outline" className="gap-2">
                            <Link href={project.liveUrl} target="_blank">
                                <ExternalLink size={14} /> Live Demo
                            </Link>
                        </Button>
                    ) : null}

                    {project.githubUrl && (
                        <Button asChild size="sm" variant="ghost" className="gap-2">
                            <Link href={project.githubUrl} target="_blank">
                                <Github size={14} /> Code
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}

export function Projects() {
    const featuredProject = projects.find(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <Section id="projects" className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A selection of projects demonstrating my skills in web and mobile development.
                </p>
            </div>

            {featuredProject && <FeaturedProjectCard project={featuredProject} />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </Section>
    );
}
