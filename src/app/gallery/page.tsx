import { JsonLd } from "@/components/json-ld";
import { GalleryScreen } from "@/components/screens/gallery-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery & Behind the Scenes | Rafał Ulatowski",
    description: "A glimpse into the daily work of a Senior Azure Cloud Engineer. Architecture diagrams, team collaboration, and development environment setups.",
    alternates: {
        canonical: '/gallery',
    },
};

export default function GalleryPage() {
    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://ulatowski.net/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Gallery",
                        "item": "https://ulatowski.net/gallery"
                    }
                ]
            }} />
            <GalleryScreen />
        </>
    );
}
