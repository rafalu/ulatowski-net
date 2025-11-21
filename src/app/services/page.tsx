import { JsonLd } from "@/components/json-ld";
import { ServicesScreen } from "@/components/screens/services-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How I Deliver Complete Cloud Solutions | Rafał Ulatowski",
    description: "I build and ship complete Azure cloud systems from start to finish — writing .NET code, building infrastructure, setting up CI/CD. Production-ready delivery, not PowerPoint architectures.",
    alternates: {
        canonical: '/services',
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
