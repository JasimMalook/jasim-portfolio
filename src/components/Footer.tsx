"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, MessageCircle, Mail } from "lucide-react";
import { Button } from "./ui/Button";

function FiverrIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.502 15.049c-.604.267-1.284.442-2.002.527v1.924c0 .774-.628 1.402-1.402 1.402h-.3c-.774 0-1.402-.628-1.402-1.402v-1.842c-2.08-.431-3.652-1.22-4.565-2.334h-.006l3.607 5.902c.542.89 1.551 1.455 2.668 1.455h.209c.842 0 1.527-.685 1.527-1.527 0-.842-.685-1.527-1.527-1.527h-.107c-.406 0-.778.16-1.047.418l-2.234 3.509V15.2c0-.608-.493-1.102-1.102-1.102h-1.8c-.608 0-1.102.493-1.102 1.102v4.523c0 .774-.628 1.402-1.402 1.402h-.3c-.774 0-1.402-.628-1.402-1.402v-4.523c0-1.868 1.518-3.386 3.386-3.386h1.8c1.868 0 3.386 1.518 3.386 3.386v1.842c1.206-.14 2.347-.555 3.354-1.187l-2.05-3.346c-.373-.608-.208-1.406.365-1.84.572-.433 1.36-.293 1.787.26l3.126 4.038V15.2c0-.608-.493-1.102-1.102-1.102h-.2z" />
        </svg>
    );
}

function UpworkIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.058 16.616c2.173-.283 3.073-2.06 3.073-2.06l.007-.065s-.753 2.388-3.54 2.388c0 0-1.942.1-3.463.1h-2.56c-1.563 0-3.882-.1-3.882-.1 2.66 0 4.144-2.337 4.144-2.337h.004c.388-.703.7-1.153 1.16-1.377.803-.393 1.885-.243 2.97.215 1.722.72 2.795 1.86 2.795 1.86l-3.804-2.605s-.416-.516-1.15-.835c-.532-.232-1.145-.294-1.663-.072-.918.395-1.294 1.328-1.294 1.328s.505-1.156 1.918-1.642c1.07-.37 2.39-.343 3.328.273.504.332.893.79 1.15 1.305l.04.08s-1.285-3.436-5.653-3.436H7.84S4.5 6.05 4.5 6.05c3.672 0 5.802 3.552 6.13 4.04.375.557.595 1.075.718 1.546 1.16-.167 2.377-.043 3.364.518.527.3.973.743 1.32 1.288.065.102.128.207.187.314l.84-1.14z" />
        </svg>
    );
}

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { name: "GitHub", href: "https://github.com/JasimMalook", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jasim-malook", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/JasimMalook", icon: Twitter },
    { name: "Fiverr", href: "https://www.fiverr.com/jasimmalook?public_mode=true", icon: FiverrIcon },
    { name: "Upwork", href: "https://www.upwork.com/freelancers/~014c25762fc2275193?viewMode=1", icon: UpworkIcon },
    { name: "Email", href: "mailto:jasimmalook@gmail.com", icon: Mail },
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
                            Building scalable web applications, SaaS platforms, and AI-powered
                            automation systems for modern businesses.
                        </p>
                        <p className="text-muted-foreground text-xs mt-2 max-w-xs">
                            Available for freelance projects, collaborations, and long-term partnerships.
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
                                <Button key={social.name} variant="outline" size="icon" asChild className="rounded-full w-9 h-9 hover:scale-110 transition-transform duration-200">
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
