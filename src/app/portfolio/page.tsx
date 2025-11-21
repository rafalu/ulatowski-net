import { JsonLd } from "@/components/json-ld";
import { PortfolioScreen } from "@/components/screens/portfolio-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Rafał Ulatowski",
    description: "Showcase of projects and technical capabilities.",
    alternates: {
        canonical: '/portfolio',
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