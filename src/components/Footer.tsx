"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/Button";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/JasimMalook", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jasim-malook", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/JasimMalook", icon: Twitter },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-background border-t border-border py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="font-bold text-xl flex items-center gap-2 justify-center md:justify-start">
                            <span>Jasim<span className="text-primary">.dev</span></span>
                        </Link>
                        <p className="text-muted-foreground mt-2 text-sm">
                            Building modern, scalable digital products for web and mobile.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <Button key={social.name} variant="ghost" size="sm" asChild className="rounded-full w-10 h-10 p-0">
                                <Link href={social.href} target="_blank" aria-label={social.name}>
                                    <social.icon size={20} />
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Jasim. All rights reserved.</p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        Back to top <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
