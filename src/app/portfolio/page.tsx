import { JsonLd } from "@/components/json-ld";
import { PortfolioScreen } from "@/components/screens/portfolio-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Rafał Ulatowski",
    description: "Showcase of projects and technical capabilities.",
    alternates: {
        canonical: '/portfolio',
    },
    openGraph: {
        title: "Portfolio | Rafał Ulatowski",
        description: "Showcase of projects and technical capabilities.",
        url: "https://ulatowski.net/portfolio",
        type: "website",
        images: [
            {
                url: "https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp",
                width: 1200,
                height: 630,
                alt: "Portfolio - Rafał Ulatowski",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Rafał Ulatowski",
        description: "Showcase of projects and technical capabilities.",
        images: ["https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp"],
    },
};

export default function PortfolioPage() {
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
                        "name": "Portfolio",
                        "item": "https://ulatowski.net/portfolio"
                    }
                ]
            }} />
            <PortfolioScreen />
        </>
    );
}