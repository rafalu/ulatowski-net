"use client";

import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const HeroAvatar = dynamic(() => import("@/components/hero-avatar"), { ssr: false });

export function ComingSoonScreen() {
    return (
        <SiteShell>
            <div className="flex min-h-dvh flex-col items-center justify-center p-4 text-center">
                <div className="mb-8">
                    <HeroAvatar />
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Coming Soon
                </h1>
                <p className="mb-8 max-w-lg text-lg text-slate-400 sm:text-xl">
                    I&apos;m currently building my new portfolio. 
                    Check back soon for updates on my latest work and projects.
                </p>
                
                <div className="flex gap-4">
                    <Button asChild variant="outline" className="gap-2">
                        <Link href="mailto:contact@ulatowski.net">
                            <Mail className="h-4 w-4" />
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </div>
        </SiteShell>
    );
}
