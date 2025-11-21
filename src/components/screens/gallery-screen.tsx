"use client";

import { GallerySection } from "@/components/sections/gallery-section";
import { motion } from "framer-motion";

export function GalleryScreen() {
    return (
        <div className="pt-24 pb-16">
            <div className="mx-auto max-w-6xl px-4 mb-12">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Behind the Scenes of Work
                </motion.h1>
                <motion.p
                    className="text-lg text-muted-foreground max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    A glimpse into the daily life of a cloud architect & cloud engineer: architecture planning, team collaboration, and the tools of the trade.
                </motion.p>
            </div>

            <GallerySection />
        </div>
    );
}
