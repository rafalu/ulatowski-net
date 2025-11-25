"use client";

import { useEffect, useState } from "react";

/**
 * LocalTime is a small client-only component that renders a consistently-formatted
 * local time string. It avoids using `toLocaleTimeString` without explicit
 * formatting on the server so we don't get hydration mismatches between server
 * and client locales.
 */
export default function LocalTime({ className }: { className?: string }) {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        function formatTime(d: Date) {
            const hours = d.getHours();
            const minutes = d.getMinutes().toString().padStart(2, "0");
            // Convert to 12-hour format and keep a leading zero like 04:36
            const hour12 = ((hours + 11) % 12) + 1;
            const hour12Str = hour12.toString().padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";
            return `${hour12Str}:${minutes} ${ampm}`;
        }

        // Initialize the time immediately and refresh every 60 seconds
        const update = () => setTime(formatTime(new Date()));
        update();
        const id = setInterval(update, 60_000);
        return () => clearInterval(id);
    }, []);

    // Server-rendered fallback is null/placeholder, so the server markup will match
    // the client until the effect runs and the component hydrates. This avoids
    // mixing server locale formats (like 04.36) with client formats.
    if (!time) return <span className={className}>—</span>;
    return <span className={className}>{time}</span>;
}
