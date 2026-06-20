"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Globe, Smartphone, Rocket, BrainCircuit, Server, Zap } from "lucide-react";

const services = [
    {
        title: "Web Application Development",
        description: "Build fast, scalable, and modern web applications using React and Next.js focused on performance, SEO, and real business problem solving.",
        icon: Globe,
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications built for iOS and Android with smooth performance and modern UI/UX.",
        icon: Smartphone,
    },
    {
        title: "SaaS & MVP Development",
        description: "End-to-end SaaS platforms and MVPs that help startups validate ideas, launch quickly, and scale efficiently.",
        icon: Rocket,
    },
    {
        title: "AI-Powered Solutions",
        description: "Smart applications integrated with AI and LLMs to automate workflows, improve decision-making, and enhance user experience.",
        icon: BrainCircuit,
    },
    {
        title: "Backend & API Systems",
        description: "Secure and scalable backend systems using Node.js, including REST APIs, authentication, and database architecture.",
        icon: Server,
    },
    {
        title: "Automation & Business Systems",
        description: "Custom automation solutions using tools like n8n, Make, Zapier, and APIs to eliminate manual work, optimize workflows, and improve business efficiency.",
        icon: Zap,
    },
];

export function Services() {
    return (
        <Section id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    End-to-end digital solutions to build, automate, and scale modern businesses.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Card
                        key={service.title}
                        className="group hover:border-primary/50 transition-all duration-300"
                        whileHover={{ y: -5 }}
                    >
                        <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                            <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
