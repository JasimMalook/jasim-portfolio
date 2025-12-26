import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

// Simple Input generic component since I don't want to create separate files for just this
function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
}
function FormTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return <textarea {...props} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
}

export function Contact() {
    return (
        <Section id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Let’s work together</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Ready to start a project or have an idea in mind?
                        Feel free to reach out — I’m always open to discussing new opportunities, collaborations, or freelance work.
                    </p>

                    <div className="space-y-4">
                        <a href="mailto:hello@jasim.dev" className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="font-medium">Email Me</p>
                                <p className="text-muted-foreground">jasimmalook@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex gap-4 mt-8">
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://github.com/JasimMalook"><Github size={20} /></Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://www.linkedin.com/in/jasim-malook"><Linkedin size={20} /></Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://x.com/JasimMalook"><Twitter size={20} /></Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <Card variant="glass" className="p-8">
                    <form action="https://formspree.io/f/mzdbbwrl" method="POST" className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <FormInput id="name" name="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <FormInput id="email" name="email" type="email" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <FormInput id="subject" name="subject" placeholder="Project Inquiry" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <FormTextarea id="message" name="message" placeholder="Tell me about your project..." rows={4} />
                        </div>
                        <Button type="submit" className="w-full" size="lg">Send Message</Button>
                    </form>
                </Card>
            </div>
        </Section>
    );
}
