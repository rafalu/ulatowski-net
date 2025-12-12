import { HomeScreen } from "@/components/screens/home-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rafał Ulatowski | .NET & Azure Cloud Systems Engineer",
    description:
        "I build production-ready .NET systems on Azure. End-to-end delivery: code, cloud infrastructure, CI/CD. Copenhagen-based, available across EU/UK/US.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Rafał Ulatowski | .NET & Azure Cloud Systems Engineer",
        description: "I build production-ready .NET systems on Azure. End-to-end delivery: code, cloud infrastructure, CI/CD. Copenhagen-based, available across EU/UK/US.",
        url: "https://ulatowski.net",
        type: "website",
        images: [
            {
                url: "https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp",
                width: 1200,
                height: 630,
                alt: "Rafał Ulatowski - .NET & Azure Cloud Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rafał Ulatowski | .NET & Azure Cloud Systems Engineer",
        description: "I build production-ready .NET systems on Azure. End-to-end delivery: code, cloud infrastructure, CI/CD. Copenhagen-based, available across EU/UK/US.",
        images: ["https://ulatowski.net/og/senior-dotnet-azure-cloud-engineer.webp"],
    },
};

export default function Home() {
    return (
        <>
            <HomeScreen />
        </>
    );
}
