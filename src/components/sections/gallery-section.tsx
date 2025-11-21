"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export function GallerySection() {
    return (
        <section id="gallery" className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-4 py-16">
                <motion.h2
                    className="text-2xl font-semibold tracking-tight mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Behind the scenes of work
                </motion.h2>
                <motion.p
                    className="text-slate-400 mt-1 text-sm mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    System architecture, team work and daily challenges of a cloud engineer.
                </motion.p>

                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <Image
                            src="/images/architecture-work.svg"
                            alt="Azure cloud architecture design by Senior Cloud Engineer - system diagrams, Bicep IaC templates, and cloud-native infrastructure planning"
                            width={400}
                            height={192}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold mb-1">Architecture Design</h3>
                            <p className="text-slate-200 text-sm">System diagrams, IaC templates, and cost optimization</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <Image
                            src="/images/team-work.svg"
                            alt="Agile team collaboration in Azure DevOps - code reviews, pull requests, and mentoring junior developers"
                            width={400}
                            height={192}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold mb-1">Team Collaboration</h3>
                            <p className="text-slate-200 text-sm">Agile, code reviews, and mentoring junior developers</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <Image
                            src="/images/workspace.svg"
                            alt="Professional Azure development environment - VS Code setup, Azure CLI, Git workflows, and CI/CD pipeline configuration"
                            width={400}
                            height={192}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold mb-1">Development Environment</h3>
                            <p className="text-slate-200 text-sm">VS Code, Azure CLI, Git workflows, and CI/CD tools</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
