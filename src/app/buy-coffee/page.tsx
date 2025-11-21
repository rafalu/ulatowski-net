import { JsonLd } from "@/components/json-ld";
import { BuyCoffeeScreen } from "@/components/screens/buy-coffee-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Buy Me a Coffee | Rafał Ulatowski",
    description: "Support my work and open source contributions.",
    alternates: {
        canonical: '/buy-coffee',
    },
};

export default function BuyCoffeePage() {
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
                        "name": "Buy Coffee",
                        "item": "https://ulatowski.net/buy-coffee"
                    }
                ]
            }} />
            <BuyCoffeeScreen />
        </>
    );
}