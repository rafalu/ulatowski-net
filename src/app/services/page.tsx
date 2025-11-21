import { JsonLd } from "@/components/json-ld";
import { ServicesScreen } from "@/components/screens/services-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Azure Cloud & .NET Consulting Services | Rafał Ulatowski",
    description: "Specialized consulting in Azure cloud architecture, legacy .NET modernization, and DevOps automation. Helping businesses in Denmark and EU build scalable, secure cloud systems.",
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesPage() {
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
                        "name": "Services",
                        "item": "https://ulatowski.net/services"
                    }
                ]
            }} />
            <ServicesScreen />
        </>
    );
}
