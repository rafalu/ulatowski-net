"use client";

import dynamic from "next/dynamic";
import React from "react";

const FloatingParticles = dynamic(() => import("@/components/floating-particles"), {
    ssr: false,
});

export function SiteShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh bg-[radial-gradient(100%_60%_at_50%_0%,#0b1020_0%,#05070d_100%)] text-slate-100 antialiased selection:bg-white/20 relative overflow-hidden">
            <FloatingParticles />
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
                <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
