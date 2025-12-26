"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Download, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-24 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                        Available for freelance work
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        I build modern <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                            web & mobile apps
                        </span>
                        <br />
                        for growing businesses
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                        Full-Stack Developer specializing in clean, fast, and scalable solutions.
                        Helping startups and companies turn ideas into production-ready products.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <Link href="#contact">
                                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="#projects">
                                View Projects
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Image / Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/10">
                            <Image
                                src="/images/jasim.png"
                                alt="Jasim Malook – Full Stack Developer"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10"
                        >
                            <span className="text-2xl">🚀</span>
                            <span className="ml-2 font-bold">Fast Delivery</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10"
                        >
                            <span className="text-2xl">✨</span>
                            <span className="ml-2 font-bold">Clean Code</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
