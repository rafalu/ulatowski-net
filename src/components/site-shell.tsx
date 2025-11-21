"use client";

import dynamic from "next/dynamic";
import React from "react";

const FloatingParticles = dynamic(() => import("@/components/floating-particles"), {
    ssr: false,
});

export function SiteShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh bg-background text-foreground antialiased selection:bg-primary/20 relative overflow-hidden dark:bg-[radial-gradient(100%_60%_at_50%_0%,#0b1020_0%,#05070d_100%)] dark:selection:bg-white/20">
            <FloatingParticles />
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
                <div className="h-full w-full bg-[size:28px_28px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
