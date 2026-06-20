"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { name: "GitHub", href: "https://github.com/JasimMalook", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jasim-malook", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/JasimMalook", icon: Twitter },
    { name: "WhatsApp", href: "https://wa.me/923369662100", icon: MessageCircle },
];

export function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="max-w-[90%] mx-auto px-4 md:px-6 py-16">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="font-bold text-xl inline-flex items-center gap-2 mb-4">
                            <span>Jasim<span className="text-primary">.dev</span></span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Full-Stack Developer &amp; Automation Specialist building scalable
                            digital products, SaaS platforms, and AI-powered systems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Get in Touch</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a
                                    href="mailto:jasimmalook@gmail.com"
                                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                                >
                                    jasimmalook@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/923369662100"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                                >
                                    WhatsApp: +92 336 966 2100
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-5">
                            {socialLinks.map((social) => (
                                <Button key={social.name} variant="outline" size="icon" asChild className="rounded-full w-9 h-9">
                                    <Link href={social.href} target="_blank" aria-label={social.name}>
                                        <social.icon size={16} />
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Jasim Malook. All rights reserved.</p>
                    <p>Built with Next.js &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
