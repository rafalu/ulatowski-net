"use client";

import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { ServicesSection } from "@/components/sections/services-section";

export function HomeScreen() {
    return (
        <>
            <HeroSection />
            <QuoteSection />
            <IndustriesSection />
            <ProjectsSection />
            <ServicesSection variant="summary" />
            <GallerySection />
        </>
    );
}