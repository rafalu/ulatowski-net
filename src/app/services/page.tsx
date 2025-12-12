import { JsonLd } from "@/components/json-ld";
import { ServicesScreen } from "@/components/screens/services-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Solutions & Services | Rafał Ulatowski",
    description: "I build complete Azure cloud systems: .NET code, infrastructure, CI/CD. AI-driven delivery for faster time-to-market. Production-ready, not PowerPoint.",
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: "Cloud Solutions & Services | Rafał Ulatowski",
        description: "I build complete Azure cloud systems: .NET code, infrastructure, CI/CD. AI-driven delivery for faster time-to-market. Production-ready, not PowerPoint.",
        url: "https://ulatowski.net/services",
        type: "website",
        images: [
            {
                url: "https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp",
                width: 1200,
                height: 630,
                alt: "Cloud Solutions & Services - Rafał Ulatowski",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Solutions & Services | Rafał Ulatowski",
        description: "I build complete Azure cloud systems: .NET code, infrastructure, CI/CD. AI-driven delivery for faster time-to-market. Production-ready, not PowerPoint.",
        images: ["https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp"],
    },
};

export default function ServicesPage() {
    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://ulatowski.net/services/#webpage",
                        "url": "https://ulatowski.net/services",
                        "name": "How I Deliver Complete Cloud Solutions",
                        "isPartOf": {
                            "@id": "https://ulatowski.net/#website"
                        },
                        "about": {
                            "@id": "https://ulatowski.net/#person"
                        },
                        "description": "I build and ship complete Azure cloud systems — from .NET code to production infrastructure."
                    },
                    {
                        "@type": "ItemList",
                        "@id": "https://ulatowski.net/services/#services",
                        "name": "Cloud Delivery Services",
                        "itemListElement": [
                            {
                                "@type": "Service",
                                "name": "End-to-end Azure cloud platform delivery",
                                "description": "I build secure Azure platforms and deliver modernized .NET systems to production",
                                "provider": {
                                    "@id": "https://ulatowski.net/#person"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "CI/CD pipelines that ship code reliably",
                                "description": "Built and maintained CI/CD pipelines using Azure DevOps and GitHub Actions",
                                "provider": {
                                    "@id": "https://ulatowski.net/#person"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "CI/CD pipelines for .NET on Azure DevOps / GitHub Actions",
                                "provider": {
                                    "@id": "https://ulatowski.net/#person"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "Legacy .NET modernization & cloud migration",
                                "provider": {
                                    "@id": "https://ulatowski.net/#person"
                                }
                            }
                        ]
                    }
                ]
            }} />
            <ServicesScreen />
        </>
    );
}
