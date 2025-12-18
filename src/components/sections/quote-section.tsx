"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
    return (
        <div className="relative py-8">
            <div className="mx-auto max-w-4xl px-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <blockquote className="text-lg md:text-xl text-text-secondary italic mb-4">
                        I don&apos;t just architect systems — I build them, ship them, and make them work in production. That&apos;s where real value lives.
                    </blockquote>
                    <cite className="text-text-tertiary text-sm">— Rafał Ulatowski</cite>
                </motion.div>
            </div>
        </div>
    );
}
