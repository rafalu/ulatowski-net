"use client";

import { ObfuscatedMail } from "@/components/obfuscated-mail";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import siteConfig from "@/config/site-config.json";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/social";
import { Github, Globe, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isComingSoon = pathname === "/coming-soon";

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex h-14 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
                            <Globe className="size-5" aria-hidden />
                            <span className="hidden sm:inline">Rafał — Senior Cloud Architect</span>
                            <span className="sm:hidden">Rafał Ulatowski</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-6">
                            {!isComingSoon && (
                                <nav className="flex items-center gap-6 text-sm text-muted-foreground">
                                    <Link className="hover:text-foreground transition-colors" href="/about">About</Link>
                                    <Link className="hover:text-foreground transition-colors" href="/resume">Resume</Link>
                                    <Link className="hover:text-foreground transition-colors" href="/services">Services</Link>
                                    <Link className="hover:text-foreground transition-colors" href="/contact">Contact</Link>
                                </nav>
                            )}

                            {/* Hire Me Button */}
                            <Button asChild variant="outline" className="bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                                <Link href={isComingSoon ? "mailto:contact@ulatowski.net" : "/contact"}>
                                    Hire me
                                </Link>
                            </Button>
                            <ThemeToggle className="bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground" />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex items-center gap-4 md:hidden">
                            <Button asChild variant="outline" size="sm" className="bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                                <Link href={isComingSoon ? "mailto:contact@ulatowski.net" : "/contact"}>
                                    Hire me
                                </Link>
                            </Button>
                            <ThemeToggle className="bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground" />
                            {!isComingSoon && (
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    aria-label="Toggle menu"
                                >
                                    {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                {/* <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" /> */}

                {/* Mobile Menu Overlay */}
                {isMenuOpen && !isComingSoon && (
                    <div className="md:hidden absolute top-14 left-0 right-0 bg-background border-b border-border p-4 shadow-2xl animate-in slide-in-from-top-5">
                        <nav className="flex flex-col space-y-4 text-center">
                            <Link
                                className="text-muted-foreground hover:text-foreground py-2 transition-colors"
                                href="/about"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                className="text-muted-foreground hover:text-foreground py-2 transition-colors"
                                href="/resume"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Resume
                            </Link>
                            <Link
                                className="text-muted-foreground hover:text-foreground py-2 transition-colors"
                                href="/services"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            
                            <Link
                                className="text-muted-foreground hover:text-foreground py-2 transition-colors"
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                )}
            </header>
            {/* spacer to offset fixed header height */}
            <div aria-hidden="true" className="h-14" />
        </>
    );
}

export function Footer() {
    const year = new Date().getFullYear();
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <section id="footer" className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p>© {year} Rafał Ulatowski – Senior Cloud Architect</p>
                    <p className="text-xs">Based in Copenhagen, Denmark · {timeString} (local time)</p>
                </div>
                <div className="flex items-center gap-6">
                    <ObfuscatedMail email={siteConfig.email} className="hover:text-foreground transition-colors" />
                    <div className="flex items-center gap-3">
                        <a className="hover:text-foreground transition-colors" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="size-4" />
                        </a>
                        <a className="hover:text-foreground transition-colors" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="size-4" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
}
