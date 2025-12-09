"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroAvatarReplaceable = dynamic(() => import("@/components/hero-avatar"), { ssr: false });

export function HeroSection() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    // Smooth typing effect with consistent width
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "End-to-end delivery: code, cloud, CI/CD — production-ready.";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
                // Hide cursor after typing is complete
                setTimeout(() => setShowCursor(false), 1000);
            }
        }, 60);
        return () => clearInterval(timer);
    }, []);

    const MotionLink = motion(Link);

    return (
        <section id="home" className="relative">
            <motion.div
                style={{ y }}
                className="mx-auto max-w-6xl px-4 py-20 md:py-28"
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-12 gap-10 items-center"
                >
                    <div className="md:col-span-7">
                        <div className="mb-4" />
                        <motion.h1
                            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6 text-text-heading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            I build .NET systems that run reliably in the cloud.
                        </motion.h1>

                        <motion.div
                            className="text-2xl md:text-3xl font-medium min-h-[80px] flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-500 to-fuchsia-500 dark:from-sky-300 dark:via-indigo-200 dark:to-fuchsia-200">
                                {displayText}
                            </span>
                            {showCursor && (
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                    className="ml-1 text-sky-600 dark:text-sky-400"
                                >
                                    |
                                </motion.span>
                            )}
                        </motion.div>

                        <motion.p
                            className="mt-5 text-base md:text-lg text-text-body max-w-prose"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            If you need someone who actually knows how to build software end-to-end — from writing solid{" "}
                            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                .NET code
                            </a>{" "}
                            to shipping reliable, production-ready{" "}
                            <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                cloud systems
                            </a>{" "}
                            — that&apos;s exactly where I deliver the most impact. I don&apos;t just design architectures; I{" "}
                            <Link href="/services" className="text-sky-600 dark:text-sky-300 hover:underline">
                                build them, deploy them
                            </Link>
                            , and make sure they run in production.
                        </motion.p>

                        <motion.p
                            className="mt-4 text-sm text-text-secondary"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                        >
                            Based in Copenhagen, Denmark – working remote across EU/UK/US.
                        </motion.p>

                        <motion.div
                            className="mt-4 flex items-center gap-2 text-sm text-text-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            <span>Shipping production systems since 2005</span>
                        </motion.div>

                        <motion.div
                            className="mt-7 flex flex-wrap gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <MotionLink
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[#2da44e] hover:bg-[#2c974b] text-white transition shadow-lg shadow-[#2da44e]/30 dark:bg-[#2da44e] dark:hover:bg-[#268341]"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Hire me</span>
                            </MotionLink>

                            <MotionLink
                                href="/resume"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 hover:bg-white/10 relative overflow-hidden group"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                    initial={false}
                                />
                                <span className="relative z-10">See resume</span>
                            </MotionLink>
                        </motion.div>

                        <motion.p
                            className="mt-3 text-xs text-text-tertiary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Remote‑friendly · EU timezones · B2B or contract.
                        </motion.p>
                    </div>

                    <motion.div
                        className="md:col-span-5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="space-y-6">
                            {/* Profile Photo */}
                            <motion.div
                                className="relative"
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <HeroAvatarReplaceable />
                            </motion.div>

                            {/* Services Card - kept as visual element in hero */}
                            <motion.div
                                className="mt-12 rounded-3xl border border-slate-200 bg-white/50 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-xl shadow-sm dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_10px_40px_rgba(0,0,0,0.45)]"
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <ul className="space-y-3 text-sm text-text-secondary">
                                    <li className="flex items-center gap-2">
                                        <span className="size-4 text-emerald-400">🛡️</span> End-to-end Azure cloud delivery & optimization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="size-4 text-blue-400">🚀</span> CI/CD pipelines that actually ship code
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="size-4 text-purple-400">⚡</span> Infrastructure as Code that runs in production
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="size-4 text-cyan-400">☁️</span> Complete Azure solutions — built, deployed, working
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
