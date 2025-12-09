"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import SkillsOverview from "@/components/skills-overview";
import Link from "next/link";

export function SkillsScreen() {
    return (
        <div className="mx-auto max-w-6xl px-4 pb-16">
            <Breadcrumbs items={[{ label: "Skills" }]} />
            <div className="space-y-12">
                {/* Header Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-text-heading sm:text-5xl">
                        Core Skills & Tech Stack
                    </h1>
                    <p className="text-xl leading-relaxed text-text-body">
                        Comprehensive overview of my technical competencies — from Azure cloud architecture to .NET backend development and modern full-stack delivery, all accelerated with AI-driven workflows.
                    </p>
                </div>

                {/* Skills Content */}
                <SkillsOverview />

                {/* CTA Section */}
                <div className="flex flex-wrap gap-4 pt-6">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent text-white px-5 py-2.5 font-medium hover:bg-white/10 hover:text-sky-300 transition-colors w-full justify-center max-w-xs"
                    >
                        View my projects →
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[#2da44e] hover:bg-[#2c974b] text-white transition"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
