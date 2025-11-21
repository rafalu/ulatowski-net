import { JsonLd } from "@/components/json-ld";
import { ResumeScreen } from "@/components/screens/resume-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume | Senior Azure Cloud Architect & .NET Consultant",
    description: "Resume of Rafał Ulatowski – Senior Azure Cloud Architect & .NET Consultant with experience in Azure, .NET, DevOps and distributed systems.",
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
                "name": "Resume – Rafał Ulatowski",
                "isPartOf": {
                    "@id": "https://ulatowski.net/#website"
                },
                "about": {
                    "@id": "https://ulatowski.net/#person"
                },
                "description": "Detailed resume of Rafał Ulatowski, Senior Azure Cloud Architect & .NET Consultant."
            }} />
            <ResumeScreen />
        </>
    );
}
