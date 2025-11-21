import { JsonLd } from "@/components/json-ld";
import { ServicesScreen } from "@/components/screens/services-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Azure Cloud & .NET Consulting Services | Rafał Ulatowski",
    description: "Azure cloud architecture, DevOps, IaC with Bicep/Terraform, CI/CD and legacy .NET modernization services.",
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
                        "@id": "https://www.ulatowski.net/services/#webpage",
                        "url": "https://www.ulatowski.net/services",
                        "name": "Azure Consulting & .NET Services",
                        "isPartOf": {
                            "@id": "https://www.ulatowski.net/#website"
                        },
                        "about": {
                            "@id": "https://www.ulatowski.net/#person"
                        },
                        "description": "Consulting services for Azure cloud, DevOps, IaC, CI/CD and .NET modernization."
                    },
                    {
                        "@type": "ItemList",
                        "@id": "https://www.ulatowski.net/services/#services",
                        "name": "Azure & .NET Consulting Services",
                        "itemListElement": [
                            {
                                "@type": "Service",
                                "name": "Azure cloud architecture & landing zones",
                                "provider": {
                                    "@id": "https://www.ulatowski.net/#person"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "Infrastructure as Code with Azure Bicep & Terraform",
                                "provider": {
                                    "@id": "https://www.ulatowski.net/#person"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "CI/CD pipelines for .NET on Azure DevOps / GitHub Actions",
                                "provider": {
                                    "@id": "https://www.ulatowski.net/#person"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "Legacy .NET modernization & cloud migration",
                                "provider": {
                                    "@id": "https://www.ulatowski.net/#person"
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
