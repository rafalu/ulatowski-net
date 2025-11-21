import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Senior Azure Cloud Engineer & .NET Consultant",
    description: "Senior Azure Cloud Engineer & .NET Developer with 15+ years of experience designing and delivering secure, scalable, cloud-native systems.",
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
                "@id": "https://www.ulatowski.net/about/#webpage",
                "url": "https://www.ulatowski.net/about",
                "name": "About Rafał Ulatowski – Senior Azure Cloud Engineer",
                "isPartOf": {
                    "@id": "https://www.ulatowski.net/#website"
                },
                "about": {
                    "@id": "https://www.ulatowski.net/#person"
                },
                "description": "About page for Rafał Ulatowski, Senior Azure Cloud Engineer & .NET Consultant in Copenhagen."
            }} />
            <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
                <div className="space-y-12">
                    {/* Header Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            About Me
                        </h1>
                        <p className="text-xl leading-relaxed text-slate-300">
                            Senior Azure Cloud Engineer & .NET Developer with 15+ years of experience designing and delivering secure, scalable, cloud-native systems. Specialized in Azure architecture, Infrastructure-as-Code (Bicep/Terraform), DevOps automation, and enterprise-grade backend development.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        <p>
                            I build and optimize production systems for healthcare, fintech, and high-traffic SaaS platforms. Strong track record in designing secure network topologies (VNets, private endpoints, managed identities), implementing CI/CD pipelines, modernizing legacy workloads, and leading technical decisions across teams. Experienced in distributed systems, messaging, performance tuning, and platform engineering.
                        </p>
                    </div>

                    {/* Expertise Section */}
                    <div className="rounded-2xl bg-white/5 p-8 border border-white/10">
                        <h2 className="text-2xl font-semibold text-white mb-6">Hands-on expertise</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="font-medium text-sky-400">Azure</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    App Service, Functions, AKS, ACR, Cosmos DB, SQL, Storage, VNets, Private Links, Key Vault
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-medium text-sky-400">IaC</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Bicep (primary), Terraform
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-medium text-sky-400">DevOps</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    GitHub Actions, Azure DevOps, Docker
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-medium text-sky-400">Backend</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    .NET 6–10, REST APIs, clean architecture, domain-driven design
                                </p>
                            </div>

                            <div className="space-y-2 sm:col-span-2">
                                <h3 className="font-medium text-sky-400">Security</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Identity, RBAC, secrets, zero-trust patterns
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="border-l-4 border-sky-500 pl-6 py-2">
                        <p className="text-lg text-slate-200 italic">
                            "I bring clarity, structure, and reliability to cloud ecosystems — with focus on automation, predictable deployments, strong security practices, and measurable results. Comfortable owning architecture end-to-end and guiding teams through complex cloud modernization projects."
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
