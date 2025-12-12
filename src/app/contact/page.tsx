import { JsonLd } from "@/components/json-ld";
import { ContactScreen } from "@/components/screens/contact-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Hire a .NET & Azure Engineer",
    description: "Available for .NET & Azure projects. I deliver working systems in production—not just plans. AI-driven workflows for faster delivery. Code, infrastructure, CI/CD.",
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: "Contact | Hire a .NET & Azure Engineer",
        description: "Available for .NET & Azure projects. I deliver working systems in production—not just plans. AI-driven workflows for faster delivery. Code, infrastructure, CI/CD.",
        url: "https://ulatowski.net/contact",
        type: "website",
        images: [
            {
                url: "https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp",
                width: 1200,
                height: 630,
                alt: "Contact Rafał Ulatowski - .NET & Azure Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Hire a .NET & Azure Engineer",
        description: "Available for .NET & Azure projects. I deliver working systems in production—not just plans. AI-driven workflows for faster delivery. Code, infrastructure, CI/CD.",
        images: ["https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp"],
    },
};

export default function ContactPage() {
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
                        "name": "Contact",
                        "item": "https://ulatowski.net/contact"
                    }
                ]
            }} />
            <ContactScreen />
        </>
    );
}
