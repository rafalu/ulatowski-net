import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About | Senior Cloud & Backend Engineer (.NET, Azure, DevOps) – Copenhagen",
    description:
        "About Rafal Ulatowski – Senior Cloud & Backend Engineer specializing in .NET, C#, Azure, DevOps, microservices and production-grade cloud architecture. Based in Copenhagen, Denmark. I design and build secure, scalable, cloud-native systems end-to-end.",
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
                "name": "About Rafal Ulatowski – Senior Cloud & Backend Engineer (.NET, Azure, DevOps) in Copenhagen",
                "description": "Senior Cloud & Backend Engineer specializing in .NET, C#, Azure, DevOps, microservices and production-ready cloud architecture. I build and ship secure, scalable systems end-to-end — from backend code to Azure infrastructure and CI/CD.",
                "isPartOf": {
                    "@id": "https://ulatowski.net/#website"
                },
                "about": {
                    "@id": "https://ulatowski.net/#person"
                }
            }} />
            <div className="mx-auto max-w-3xl px-4 pb-16">
                <Breadcrumbs items={[{ label: "About" }]} />
                <div className="space-y-12">
                    {/* Header Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-text-heading sm:text-5xl">
                            About Me
                        </h1>
                        <h2 className="text-lg md:text-xl font-semibold text-text-secondary">
                            Senior Cloud & Backend Engineer (.NET / Azure / DevOps) based in Copenhagen
                        </h2>
                        <p className="text-xl leading-relaxed text-text-body">
                            I&apos;m a developer by heart, architect by experience – and today primarily a{" "}
                            <strong>Senior Cloud &amp; Backend Engineer</strong> focused on{" "}
                            <strong>.NET, C#, Azure and DevOps</strong>. I&apos;ve spent 15+ years designing and building
                            secure, scalable, production systems – from backend architecture and APIs to cloud
                            infrastructure and CI/CD pipelines. Based in Copenhagen, Denmark, I work mostly with{" "}
                            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                .NET / C#
                            </a>{" "}
                            and{" "}
                            <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                Microsoft Azure
                            </a>
                            , with modern{" "}
                            <span className="text-sky-600 dark:text-sky-300">
                                React / Next.js
                            </span>{" "}
                            used as a supporting frontend skill when end-to-end delivery needs it.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                        <p>
                            I build and ship production systems for healthcare, fintech, and high-traffic SaaS platforms.
                            I don&apos;t stop at architecture diagrams — I design and implement{" "}
                            <strong>cloud-native backends in .NET</strong>, model{" "}
                            <strong>microservices and distributed systems</strong>, and build the{" "}
                            <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                Azure infrastructure
                            </a>{" "}
                            around them. With{" "}
                            <a href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                Bicep
                            </a>
                            /Terraform, I provision App Service, Functions, Service Bus, Event Grid, VNets, Private Endpoints,
                            databases and storage — all wired into{" "}
                            <strong>CI/CD pipelines</strong> that actually ship code. From distributed messaging and
                            observability to performance optimization, I{" "}
                            <Link href="/services" className="text-sky-600 dark:text-sky-300 hover:underline">
                                deliver complete solutions
                            </Link>
                            , not just slideware.
                        </p>

                    </div>

                    {/* Expertise Section */}
                    <div className="rounded-2xl bg-white/5 p-8 border border-white/10">
                        <h2 className="text-2xl font-semibold text-text-heading mb-6">Hands-on Expertise</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {/* Backend */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Backend (primary)</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">.NET / C#</p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    REST APIs, microservices, distributed systems
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Clean Architecture, DDD
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Messaging, background workers
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    High-performance, cloud-native backend design
                                </p>
                            </div>

                            {/* Frontend (supporting) */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Frontend (supporting skill)</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    AI-powered full-stack delivery (React, Next.js, TypeScript)
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Blazor, Razor Pages (used in previous projects)
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Component-driven development
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Rapid prototyping &amp; internal tools with GitHub Copilot / AI tooling
                                </p>
                            </div>

                            {/* Cloud */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Cloud (Azure)</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Azure App Service, Azure Functions
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Azure Cosmos DB, Azure SQL
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Azure Storage, Event Grid, Service Bus
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    VNets, Private Endpoints, Key Vault
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Monitoring, logging, distributed tracing
                                </p>
                            </div>

                            {/* IaC */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Infrastructure as Code</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Bicep (primary)
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Terraform
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Modular architectures, environment isolation
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    CI-driven infra, GitOps workflows
                                </p>
                            </div>

                            {/* DevOps */}
                            <div className="space-y-2 sm:col-span-2">
                                <h3 className="font-medium text-primary">DevOps &amp; Automation</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    GitHub Actions
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Azure DevOps
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Docker
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    CI/CD for .NET, containers, IaC
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Release pipelines with approvals, environments, secrets
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="border-l-4 border-sky-500 pl-6 py-2">
                        <p className="text-lg text-text-body italic">
                            &quot;I build systems that ship. As a Senior Cloud &amp; Backend Engineer, I own the complete
                            delivery cycle — from .NET backend design and APIs to Azure infrastructure, IaC and CI/CD.
                            If you need someone who doesn&apos;t just design but actually builds, deploys and maintains
                            production systems in the cloud — that&apos;s where I deliver the most value.&quot;
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-wrap gap-4 pt-6">
                        <Link
                            href="/resume"
                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white/10 hover:bg-white/20 transition border border-white/10"
                        >
                            View my resume →
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[#2da44e] hover:bg-[#2c974b] text-white transition"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
