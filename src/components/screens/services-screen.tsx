"use client";

import { ServicesSection } from "@/components/sections/services-section";
import { motion } from "framer-motion";

export function ServicesScreen() {
    return (
        <div className="pt-24 pb-16">
            <div className="mx-auto max-w-6xl px-4 mb-12">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Azure Cloud and .NET Consulting Services
                </motion.h1>
                <motion.p
                    className="text-lg text-muted-foreground max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Comprehensive cloud solutions focusing on architecture modernization, DevOps automation, and high-performance .NET systems. I regularly work with companies in Denmark and the Nordics and am familiar with EU compliance and timezone considerations for distributed teams.
                </motion.p>
            </div>

            <ServicesSection variant="full" />
        </div>
    );
}
