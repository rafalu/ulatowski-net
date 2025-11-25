"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServicesSection } from "@/components/sections/services-section";
import { motion } from "framer-motion";

export function ServicesScreen() {
    return (
        <div className="pb-16">
            <div className="mx-auto max-w-6xl px-4 mb-12">
                <Breadcrumbs items={[{ label: "Services" }]} />
                <motion.h1
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-text-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    How I Deliver Complete Cloud Solutions
                </motion.h1>
                <motion.p
                    className="text-lg text-text-body max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    I deliver complete cloud systems from start to finish — writing the .NET code, building the Azure infrastructure, setting up CI/CD, and ensuring it all runs reliably in production. No hand-waving, no PowerPoint architectures. Just working software that ships.
                </motion.p>
            </div>

            <ServicesSection variant="full" />
        </div>
    );
}
