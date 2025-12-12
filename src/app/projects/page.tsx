import { JsonLd } from "@/components/json-ld";
import { ProjectsScreen } from "@/components/screens/projects-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects & Track Record | Rafał Ulatowski",
    description: "15+ years building production systems—from .NET backends to Azure cloud platforms. AI-accelerated development. Here's what I've actually shipped.",
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: "Projects & Track Record | Rafał Ulatowski",
        description: "15+ years building production systems—from .NET backends to Azure cloud platforms. AI-accelerated development. Here's what I've actually shipped.",
        url: "https://ulatowski.net/projects",
        type: "website",
        images: [
            {
                url: "https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp",
                width: 1200,
                height: 630,
                alt: "Projects & Track Record - Rafał Ulatowski",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects & Track Record | Rafał Ulatowski",
        description: "15+ years building production systems—from .NET backends to Azure cloud platforms. AI-accelerated development. Here's what I've actually shipped.",
        images: ["https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp"],
    },
};

export default function ProjectsPage() {
    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "@id": "https://ulatowski.net/projects/#webpage",
                "url": "https://ulatowski.net/projects",
                "name": "Track Record: Systems I've Built & Shipped",
                "isPartOf": {
                    "@id": "https://ulatowski.net/#website"
                },
                "about": {
                    "@id": "https://ulatowski.net/#person"
                },
                "description": "15+ years of building and shipping production systems — from .NET backends to complete Azure cloud platforms."
            }} />
            <ProjectsScreen />
        </>
    );
}
