import { JsonLd } from "@/components/json-ld";
import { ContactScreen } from "@/components/screens/contact-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact – Hire Someone Who Actually Delivers | Rafał Ulatowski",
    description: "Available for projects where you need someone who builds and ships complete solutions — not just plans, but working systems running in production. .NET code, Azure infrastructure, CI/CD pipelines.",
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
