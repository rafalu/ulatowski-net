import { JsonLd } from "@/components/json-ld";
import { ContactScreen } from "@/components/screens/contact-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact – Hire Someone Who Actually Delivers | Rafał Ulatowski",
    description: "Available for .NET & Azure projects. I deliver working systems in production—not just plans. AI-driven workflows for faster delivery. Code, infrastructure, CI/CD.",
    alternates: {
        canonical: '/contact',
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
