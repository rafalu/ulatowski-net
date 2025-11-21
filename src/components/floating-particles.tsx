"use client"

import { motion } from "framer-motion";
import { useMemo } from "react";

// Floating Particles Component - Client-only to avoid hydration mismatch
function FloatingParticles() {
    const particles = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-r from-sky-400/20 to-indigo-400/20"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8 + particle.speed * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.id * 0.2,
                    }}
                />
            ))}
        </div>
    );
}

export default FloatingParticles;