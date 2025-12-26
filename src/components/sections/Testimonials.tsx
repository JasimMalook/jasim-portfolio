"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alex Morgan",
        role: "Startup Founder",
        content: "Jasim helped transform an early-stage idea into a production-ready application. His attention to detail and clean development approach stood out.",
    },
    {
        name: "Sarah Chen",
        role: "Product Manager",
        content: "Clear communication, strong technical skills, and a great eye for UI. The final result exceeded expectations.",
    },
    {
        name: "David Smith",
        role: "Agency Founder",
        content: "Reliable, fast, and professional. Jasim delivered exactly what was needed and handled feedback smoothly.",
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
