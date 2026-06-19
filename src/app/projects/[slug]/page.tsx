import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb, Wrench, Target, TrendingUp, Award } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.shortTitle} – Jasim.dev`,
        description: project.summary,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    return (
        <div className="min-h-screen bg-background">
            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
                <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Link>
                    <div className="flex items-center gap-3">
                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github className="h-4 w-4" />
                                Code
                            </Link>
                        )}
                        {project.liveUrl && (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Website
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl">
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                            {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            {project.images && project.images.length > 0 && (
                <section className="pb-16 lg:pb-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="rounded-2xl overflow-hidden border border-border bg-card">
                            <img
                                src={project.images[0]}
                                alt={`${project.shortTitle} preview`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Project Overview */}
            <section className="py-16 lg:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Target className="h-5 w-5 text-primary" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Project Overview</h2>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-orange-500/10">
                                    <Lightbulb className="h-5 w-5 text-orange-500" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold">The Challenge</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>
                        <div className="space-y-4">
                            {project.challengePoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold flex items-center justify-center mt-0.5">
                                        {i + 1}
                                    </span>
                                    <p className="text-muted-foreground">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="py-16 lg:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-blue-500/10">
                                    <Wrench className="h-5 w-5 text-blue-500" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold">The Solution</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                        <div className="space-y-4">
                            {project.solutionPoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                                    <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" />
                                    <p className="text-muted-foreground">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-green-500/10">
                            <Award className="h-5 w-5 text-green-500" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.features.map((feature, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                            >
                                <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500" />
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-16 lg:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Technology Stack</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.techStack.map((tech, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between p-4 rounded-xl bg-card border border-border"
                            >
                                <span className="font-bold">{tech.name}</span>
                                <span className="text-sm text-muted-foreground">{tech.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            {project.images && project.images.length > 1 && (
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images.map((img, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl overflow-hidden border border-border bg-card group"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.shortTitle} screenshot ${i + 1}`}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Business Impact */}
            <section className="py-16 lg:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-purple-500/10">
                                    <TrendingUp className="h-5 w-5 text-purple-500" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold">Business Impact</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.impact}
                            </p>
                        </div>
                        <div className="space-y-4">
                            {project.impactPoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                                    <TrendingUp className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5" />
                                    <p className="text-muted-foreground">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Results</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {project.results.map((result, i) => (
                            <div
                                key={i}
                                className="text-center p-6 rounded-xl bg-card border border-border"
                            >
                                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                                    {result.value}
                                </p>
                                <p className="text-sm text-muted-foreground font-medium">
                                    {result.metric}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in working together?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how I can help bring your project to life with the same attention to detail and quality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {project.liveUrl && (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Visit Live Website
                            </Link>
                        )}
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium rounded-xl border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
