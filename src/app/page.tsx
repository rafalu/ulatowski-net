import { HomeScreen } from "@/components/screens/home-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Rafał Ulatowski | I Build .NET Systems That Run Reliably in the Cloud",
    description:
        "I build production-ready .NET systems on Azure. End-to-end delivery: code, cloud infrastructure, CI/CD. Copenhagen-based, available across EU/UK/US.",
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
