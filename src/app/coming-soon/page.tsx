import { ComingSoonScreen } from "@/components/screens/coming-soon-screen";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coming Soon | Rafał Ulatowski",
    description: "My new portfolio is currently under construction.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ComingSoonPage() {
    return <ComingSoonScreen />;
}
