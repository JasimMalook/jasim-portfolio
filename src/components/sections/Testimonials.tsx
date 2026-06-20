"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Client",
        role: "Startup Founder",
        content: "Jasim helped us turn a complex idea into a fully functional SaaS platform with proper architecture, clean UI, and scalable backend. The system is now running smoothly in production.",
    },
    {
        name: "Client",
        role: "Operations Manager",
        content: "The automation system he built using APIs and workflows significantly reduced our manual work and improved our operational efficiency. Very solid technical execution.",
    },
    {
        name: "Client",
        role: "Product Owner",
        content: "Strong full-stack skills with a clear understanding of business needs. He delivered a complete solution including frontend, backend, and automation integrations.",
    },
];

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <Card key={i} variant="default" className="relative p-8">
                        <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                        <p className="mb-6 text-muted-foreground italic">"{t.content}"</p>
                        <div>
                            <p className="font-bold">{t.name}</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
