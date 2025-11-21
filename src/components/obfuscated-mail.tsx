"use client";

import { ReactNode, useEffect, useState } from "react";

interface ObfuscatedMailProps {
    email: string;
    className?: string;
    children?: ReactNode;
}

export function ObfuscatedMail({ email, className, children }: ObfuscatedMailProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // Render a placeholder or nothing during SSR to hide from basic scrapers
        if (children) {
            return <span className={className}>{children}</span>;
        }
        return <span className={className}>Click to reveal email</span>;
    }

    return (
        <a href={`mailto:${email}`} className={className}>
            {children || email}
        </a>
    );
}
