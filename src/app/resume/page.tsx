import { JsonLd } from "@/components/json-ld";
import { ResumeScreen } from "@/components/screens/resume-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Track Record: Systems I've Built & Shipped | Rafał Ulatowski",
    description: "15+ years of building and shipping production systems — from .NET backends to complete Azure cloud platforms. Here's what I've actually delivered.",
    alternates: {
        canonical: '/resume',
    },
};

export default function ResumePage() {
    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "@id": "https://ulatowski.net/resume/#webpage",
                "url": "https://ulatowski.net/resume",
                "name": "Track Record: Systems I've Built & Shipped",
                "isPartOf": {
                    "@id": "https://ulatowski.net/#website"
                },
                "about": {
                    "@id": "https://ulatowski.net/#person"
                },
                "description": "15+ years of building and shipping production systems — from .NET backends to complete Azure cloud platforms."
            }} />
            <ResumeScreen />
        </>
    );
}
