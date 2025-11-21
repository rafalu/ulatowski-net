import { JsonLd } from "@/components/json-ld";
import { ContactScreen } from "@/components/screens/contact-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Rafał Ulatowski | Senior Azure Cloud Engineer",
    description: "Get in touch for Azure cloud consulting, .NET modernization projects, or DevOps engineering. Available for B2B contracts in EU/UK/US.",
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
                        "item": "https://www.ulatowski.net/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Contact",
                        "item": "https://www.ulatowski.net/contact"
                    }
                ]
            }} />
            <ContactScreen />
        </>
    );
}
