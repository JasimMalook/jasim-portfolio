"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Globe, Smartphone, Layout, Rocket, Server, BrainCircuit } from "lucide-react";

const services = [
    {
        title: "Web App Development",
        description: "Modern, scalable full-stack web applications built with React and Next.js, optimized for performance, SEO, and maintainability.",
        icon: Globe,
    },
    {
        title: "Mobile App Development",
        description: "High-quality cross-platform mobile apps for iOS and Android using React Native and modern web technologies.",
        icon: Smartphone,
    },
    {
        title: "Landing Pages",
        description: "Conversion-focused landing pages designed to attract users, capture leads, and clearly communicate your product’s value.",
        icon: Layout,
    },
    {
        title: "SaaS MVP Development",
        description: "Rapid MVP and prototype development to help startups validate ideas, launch faster, and iterate with confidence.",
        icon: Rocket,
    },
    {
        title: "API & Backend",
        description: "Secure and scalable RESTful and GraphQL APIs, database design, and authentication systems built with Node.js.",
        icon: Server,
    },
    {
        title: "AI-Powered Apps",
        description: "Smart features powered by AI and LLM integrations to automate workflows, enhance user experience, and add intelligence to apps.",
        icon: BrainCircuit,
    },
];

export function Services() {
    return (
        <Section id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    End-to-end development solutions to build, launch, and scale digital products.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
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
