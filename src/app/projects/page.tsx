import { JsonLd } from "@/components/json-ld";
import { ProjectsScreen } from "@/components/screens/projects-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Track Record: Systems I've Built & Shipped | Rafał Ulatowski",
    description: "15+ years of building and shipping production systems — from .NET backends to complete Azure cloud platforms. AI-accelerated development for faster delivery. Here's what I've actually delivered.",
    alternates: {
        canonical: '/projects',
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
