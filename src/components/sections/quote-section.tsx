"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
    return (
        <section className="relative py-8">
            <div className="mx-auto max-w-4xl px-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <blockquote className="text-lg md:text-xl text-slate-300 italic mb-4">
                        I’ve always believed every problem has a solution. With AI, finding that solution just stopped being a problem.
                    </blockquote>
                    <cite className="text-slate-400 text-sm">— Rafał Ulatowski</cite>
                </motion.div>
            </div>
        </section>
    );
}
