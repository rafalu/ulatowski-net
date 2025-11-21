"use client";

import { motion } from "framer-motion";
import { Activity, Building2, TrendingUp } from "lucide-react";

export function IndustriesSection() {
    const industries = [
        {
            label: "Fintech & trading platforms",
            icon: TrendingUp,
            description: "High-frequency trading, payment gateways, and secure financial data processing."
        },
        {
            label: "Healthcare & regulated industries",
            icon: Activity,
            description: "HIPAA/GDPR compliant architectures, secure patient data, and audit trails."
        },
        {
            label: "High-traffic B2B SaaS",
            icon: Building2,
            description: "Scalable multi-tenant architectures, global distribution, and 99.99% uptime."
        }
    ];

    return (
        <section id="industries" className="relative py-20">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="text-3xl font-bold tracking-tight mb-12 text-center text-text-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Who I work with
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.label}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/20 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-text-heading">{item.label}</h3>
                            <p className="text-text-secondary">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
