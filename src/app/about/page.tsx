import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Developer by Heart, Architect by Experience",
    description: "I'm a developer by heart, architect by experience. 15+ years of building and shipping secure, scalable production systems. I write the code, build the infrastructure, and ensure it runs reliably in production.",
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <>
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "@id": "https://ulatowski.net/about/#webpage",
                "url": "https://ulatowski.net/about",
                "name": "About Rafał Ulatowski – Developer by Heart, Architect by Experience",
                "isPartOf": {
                    "@id": "https://ulatowski.net/#website"
                },
                "about": {
                    "@id": "https://ulatowski.net/#person"
                },
                "description": "I build and ship production systems — from .NET code to Azure infrastructure. End-to-end delivery is what I do."
            }} />
            <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
                <div className="space-y-12">
                    {/* Header Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-text-heading sm:text-5xl">
                            About Me
                        </h1>
                        <p className="text-xl leading-relaxed text-text-body">
                            I'm a developer by heart, architect by experience. Senior Azure Cloud Architect & .NET Developer with 15+ years of building and shipping secure, scalable, production systems. I write the code, build the infrastructure, set up the pipelines, and ensure it all runs reliably in production. End-to-end delivery is what I do.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                        <p>
                            I build and ship production systems for healthcare, fintech, and high-traffic SaaS platforms. I don't stop at architecture diagrams — I write the .NET code, build the Azure infrastructure with Bicep/Terraform, implement the CI/CD pipelines, and make sure everything runs reliably in production. From distributed messaging to performance optimization, I deliver complete solutions.
                        </p>
                    </div>

                    {/* Expertise Section */}
                    <div className="rounded-2xl bg-white/5 p-8 border border-white/10">
                        <h2 className="text-2xl font-semibold text-text-heading mb-6">Hands-on expertise</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Azure</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">App Service, Functions, AKS, ACR, Cosmos DB, SQL, Storage, VNets, Private Links, Key Vault</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">IaC</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">Bicep (primary), Terraform</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">DevOps</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">GitHub Actions, Azure DevOps, Docker</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Backend</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">.NET 6–10, REST APIs, clean architecture, domain‑driven design</p>
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <h3 className="font-medium text-primary">Security</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">Identity, RBAC, secrets, zero‑trust patterns</p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="border-l-4 border-sky-500 pl-6 py-2">
                        <p className="text-lg text-text-body italic">
                            "I build systems that ship. From writing .NET code to deploying Azure infrastructure, I own the complete delivery cycle. If you need someone who doesn't just design but actually builds, deploys, and maintains production systems — that's where I deliver the most value."
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
