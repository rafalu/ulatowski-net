"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    /** Index for staggered animation delays */
    index?: number;
    /** Base delay multiplier for staggered animations (default: 0.15) */
    staggerDelay?: number;
    /** Custom viewport configuration */
    viewport?: { once?: boolean; amount?: number };
}

// Centralized animation configuration
const CARD_ANIMATION = {
    // Initial state when card enters viewport
    initial: {
        opacity: 0,
        y: 20,
        rotateX: 8,
    },
    // Final state after animation
    animate: {
        opacity: 1,
        y: 0,
        rotateX: 0,
    },
    // Hover state - reduced values for subtler effect
    hover: {
        y: -4,          // Reduced from -8
        scale: 1.01,    // Reduced from 1.02
        rotateX: -1,    // Reduced from -2
    },
    // Transition configuration
    transition: {
        duration: 0.3,
        type: "spring" as const,
        stiffness: 100,
    },
    // Hover transition
    hoverTransition: {
        duration: 0.3,
    },
} as const;

/**
 * AnimatedCard - Reusable card component with consistent enter and hover animations.
 * 
 * Features:
 * - Smooth entrance animation with slight 3D rotation
 * - Subtle hover effect (lift + scale + rotate)
 * - Staggered animation support via index prop
 * - Centralized animation values for easy global adjustments
 * 
 * @example
 * ```tsx
 * <AnimatedCard index={0} className="p-6 bg-card">
 *   <h3>Card Content</h3>
 * </AnimatedCard>
 * ```
 */
export function AnimatedCard({
    children,
    className = "",
    index = 0,
    staggerDelay = 0.15,
    viewport = { once: true, amount: 0.2 },
}: AnimatedCardProps) {
    return (
        <motion.article
            initial={CARD_ANIMATION.initial}
            whileInView={CARD_ANIMATION.animate}
            viewport={viewport}
            transition={{
                ...CARD_ANIMATION.transition,
                delay: index * staggerDelay,
            }}
            whileHover={{
                ...CARD_ANIMATION.hover,
                transition: CARD_ANIMATION.hoverTransition,
            }}
            className={className}
        >
            {children}
        </motion.article>
    );
}

/**
 * Export animation values for use in nested elements or custom animations
 */
export const cardAnimationConfig = CARD_ANIMATION;
