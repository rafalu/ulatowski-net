import { JsonLd } from "@/components/json-ld";
import { HomeScreen } from "@/components/screens/home-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Senior Azure Cloud Engineer & .NET Consultant | Rafał Ulatowski",
    description: "Senior Azure Cloud Engineer and .NET consultant. Based in Copenhagen, Denmark – working remote across EU/UK/US. Azure cloud architecture, DevOps, Bicep IaC, CI/CD and modernization of legacy .NET systems for fintech and B2B.",
    alternates: {
        canonical: '/',
    },
};

export default function Home() {
    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Rafał Ulatowski - Senior Azure Cloud Engineer",
                "url": "https://rafalulatowski.com/",
                "author": {
                    "@id": "https://rafalulatowski.com/#person"
                }
            }} />
            <HomeScreen />
        </>
    );
}
