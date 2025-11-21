import { JsonLd } from "@/components/json-ld";
import { ResumeScreen } from "@/components/screens/resume-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume & Experience | Rafał Ulatowski",
    description: "Professional background of a Senior Azure Cloud Engineer & .NET Consultant. Experience with Azure, .NET, DevOps, and cloud migrations.",
    alternates: {
        canonical: '/resume',
    },
};

export default function ResumePage() {
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
                        "name": "Resume",
                        "item": "https://ulatowski.net/resume"
                    }
                ]
            }} />
            <ResumeScreen />
        </>
    );
}
