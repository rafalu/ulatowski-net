"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ObfuscatedMail } from "@/components/obfuscated-mail";
import { Toast } from "@/components/ui/toast";
import siteConfig from "@/config/site-config.json";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/social";
import { useToast } from "@/lib/use-toast";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function ContactScreen() {
    const { message, show, hide } = useToast();
    const [isCopied, setIsCopied] = useState(false);
    const email = siteConfig.email;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            show("Email copied to clipboard!");

            setTimeout(() => setIsCopied(false), 2000);

            // GA4 event tracking (only if gtag is available)
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'email_copy', {
                    event_category: 'engagement',
                    event_label: 'contact_page',
                });
            }
        } catch (err) {
            show("Failed to copy email");
        }
    };

    return (
        <div className="pb-16 min-h-[80vh] flex flex-col justify-center">
            <div className="mx-auto max-w-5xl px-4 w-full">
                <Breadcrumbs items={[{ label: "Contact" }]} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-text-heading">
                        Contact – Hire Someone Who Actually Delivers
                    </h1>
                    <p className="text-lg text-text-body max-w-2xl mb-10">
                        I'm available for projects where you need someone who builds and ships complete solutions — not just plans or designs, but working systems running in production. If you need .NET code written, Azure infrastructure built, and CI/CD pipelines delivering reliably, let's talk.
                    </p>

                    <div className="grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-7 space-y-4">
                            {/* Email Card */}
                            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-sky-500/50 hover:bg-sky-500/5 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]">
                                <div className="flex items-start gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                                        <Mail className="size-6" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-semibold text-foreground text-lg">Email</h3>
                                        <p className="text-sm text-text-secondary">Best for project inquiries and details.</p>
                                        <div className="pt-2 flex flex-wrap items-center gap-3">
                                            <ObfuscatedMail
                                                email={email}
                                                className="text-base font-medium text-sky-500 dark:text-sky-300 hover:text-sky-400 dark:hover:text-sky-200 transition-colors"
                                            />
                                            <button
                                                onClick={handleCopy}
                                                className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors min-w-[70px] justify-center"
                                                aria-label="Copy email to clipboard"
                                            >
                                                {isCopied ? (
                                                    <>
                                                        <Check className="size-3.5 text-emerald-400" />
                                                        <span className="text-emerald-400">Copied</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="size-3.5" />
                                                        <span>Copy</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn Card */}
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
                            >
                                <div className="absolute top-6 right-6 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowUpRight className="size-5 text-blue-400" />
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                                        <Linkedin className="size-6" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-semibold text-foreground text-lg">LinkedIn</h3>
                                        <p className="text-sm text-text-secondary">Connect for professional networking.</p>
                                        <div className="pt-2">
                                            <span className="text-base font-medium text-blue-500 dark:text-blue-400 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors">
                                                Connect on LinkedIn
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* GitHub Card */}
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/5 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]"
                            >
                                <div className="absolute top-6 right-6 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowUpRight className="size-5 text-purple-400" />
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                                        <Github className="size-6" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-semibold text-foreground text-lg">GitHub</h3>
                                        <p className="text-sm text-text-secondary">Check my open source contributions.</p>
                                        <div className="pt-2">
                                            <span className="text-base font-medium text-purple-500 dark:text-purple-400 group-hover:text-purple-400 dark:group-hover:text-purple-300 transition-colors">
                                                View Profile
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="md:col-span-5">
                            <div className="rounded-3xl border border-border bg-card p-8 backdrop-blur-xl h-full">
                                <h3 className="text-xl font-semibold mb-6">Availability & Focus</h3>
                                <ul className="space-y-4 text-text-secondary">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                        <span>Open for B2B contracts (EU/UK/US)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                        <span>Specialized in Azure & .NET 8+</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                        <span>Cloud Migration & Modernization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                        <span>DevOps & Infrastructure as Code</span>
                                    </li>
                                </ul>

                                <div className="mt-8 pt-8 border-t border-border">
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        I typically respond within 24 hours. For urgent matters, please mark your email subject as "Urgent".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {message && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
                    <Toast onClose={hide}>
                        {message}
                    </Toast>
                </div>
            )}
        </div>
    );
}
