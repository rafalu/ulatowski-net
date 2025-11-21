import { HomeScreen } from "@/components/screens/home-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Senior Azure Cloud Architect in Copenhagen | Cloud & .NET Consultant",
    description:
        "Senior Azure Cloud Architect and cloud & .NET consultant. Based in Copenhagen, Denmark – working remote across EU/UK/US. Azure landing zones, cloud architecture, DevOps, Bicep IaC, CI/CD and modernization of legacy .NET systems for fintech and B2B.",
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    return (
        <>
            <HomeScreen />
        </>
    );
}
