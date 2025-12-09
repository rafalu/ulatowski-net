import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Metadata } from "next";
import Link from "next/link";

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
            <div className="mx-auto max-w-3xl px-4 pb-16">
                <Breadcrumbs items={[{ label: "About" }]} />
                <div className="space-y-12">
                    {/* Header Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-text-heading sm:text-5xl">
                            About Me
                        </h1>
                        <p className="text-xl leading-relaxed text-text-body">
                            I&apos;m a developer by heart, architect by experience. Senior Azure Cloud Architect &{" "}
                            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                .NET Developer
                            </a>{" "}
                            with 15+ years of building and shipping secure, scalable, production systems. I write the code, build the infrastructure, set up the pipelines, and ensure it all runs reliably in production. End-to-end delivery is what I do.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                        <p>
                            I build and ship production systems for healthcare, fintech, and high-traffic SaaS platforms. I don&apos;t stop at architecture diagrams — I write the .NET code, build the{" "}
                            <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                Azure infrastructure
                            </a>{" "}
                            with{" "}
                            <a href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">
                                Bicep
                            </a>
                            /Terraform, implement the CI/CD pipelines, and make sure everything runs reliably in production. From distributed messaging to performance optimization, I{" "}
                            <Link href="/services" className="text-sky-600 dark:text-sky-300 hover:underline">
                                deliver complete solutions
                            </Link>.
                        </p>
                    </div>

                    {/* Expertise Section */}
                    <div className="rounded-2xl bg-white/5 p-8 border border-white/10">
                        <h2 className="text-2xl font-semibold text-text-heading mb-6">Hands-on Expertise</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Backend (Primary)</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">.NET 6–10, C#</p>
                                <p className="text-sm text-text-secondary leading-relaxed">REST APIs, microservices</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Clean Architecture, DDD</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Messaging, background workers</p>
                                <p className="text-sm text-text-secondary leading-relaxed">High-performance, cloud-native backend design</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Full-Stack</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">Blazor (Server/WebAssembly)</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Razor Pages (ASP.NET Core)</p>
                                <p className="text-sm text-text-secondary leading-relaxed">React &amp; Next.js (&quot;projektowo / non-commercial&quot;)</p>
                                <p className="text-sm text-text-secondary leading-relaxed">TypeScript</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Component-driven development</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Rapid prototyping & internal tools with GitHub Copilot</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Cloud (Azure)</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">App Service, Functions</p>
                                <p className="text-sm text-text-secondary leading-relaxed">AKS, ACR</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Cosmos DB, SQL</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Storage, Event Grid, Service Bus</p>
                                <p className="text-sm text-text-secondary leading-relaxed">VNets, Private Endpoints, Key Vault</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Monitoring, logging, distributed tracing</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-primary">Infrastructure as Code</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">Bicep (primary)</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Terraform</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Modular architectures, environment isolation</p>
                                <p className="text-sm text-text-secondary leading-relaxed">CI-driven infra, GitOps workflows</p>
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <h3 className="font-medium text-primary">DevOps & Automation</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">GitHub Actions</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Azure DevOps</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Docker</p>
                                <p className="text-sm text-text-secondary leading-relaxed">CI/CD for .NET, containers, IaC</p>
                                <p className="text-sm text-text-secondary leading-relaxed">Release pipelines with approvals, environments, secrets</p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="border-l-4 border-sky-500 pl-6 py-2">
                        <p className="text-lg text-text-body italic">
                            &quot;I build systems that ship. From writing .NET code to deploying Azure infrastructure, I own the complete delivery cycle. If you need someone who doesn&apos;t just design but actually builds, deploys, and maintains production systems — that&apos;s where I deliver the most value.&quot;
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
