import { HomeScreen } from "@/components/screens/home-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Rafał Ulatowski | I Build .NET Systems That Run Reliably in the Cloud",
    description:
        "I build and ship production-ready .NET systems on Azure — from writing solid code to deploying complete cloud infrastructure. End-to-end delivery: code, cloud, CI/CD. Based in Copenhagen, available across EU/UK/US.",
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
