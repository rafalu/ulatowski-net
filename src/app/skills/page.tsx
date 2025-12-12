import { JsonLd } from "@/components/json-ld";
import { SkillsScreen } from "@/components/screens/skills-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technical Skills | Rafał Ulatowski",
    description: "Comprehensive overview of my technical competencies — Azure cloud, .NET backend, DevOps, AI-assisted development and full-stack delivery skills.",
    alternates: {
        canonical: '/skills',
    },
    openGraph: {
        title: "Technical Skills | Rafał Ulatowski",
        description: "Comprehensive overview of my technical competencies — Azure cloud, .NET backend, DevOps, AI-assisted development and full-stack delivery skills.",
        url: "https://ulatowski.net/skills",
        type: "website",
        images: [
            {
                url: "https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp",
                width: 1200,
                height: 630,
                alt: "Technical Skills - Rafał Ulatowski",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Technical Skills | Rafał Ulatowski",
        description: "Comprehensive overview of my technical competencies — Azure cloud, .NET backend, DevOps, AI-assisted development and full-stack delivery skills.",
        images: ["https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp"],
    },
};

export default function SkillsPage() {
    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "@id": "https://ulatowski.net/skills/#webpage",
                "url": "https://ulatowski.net/skills",
                "name": "Technical Skills - Rafał Ulatowski",
                "isPartOf": {
                    "@id": "https://ulatowski.net/#website"
                },
                "about": {
                    "@id": "https://ulatowski.net/#person"
                },
                "description": "Comprehensive overview of my technical competencies — Azure cloud, .NET backend, DevOps, and full-stack development skills."
            }} />
            <SkillsScreen />
        </>
    );
}
