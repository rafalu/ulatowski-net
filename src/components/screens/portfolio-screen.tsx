"use client";

import { Layout } from "@/components/layout";

export function PortfolioScreen() {
    return (
        <Layout>
            <div className="space-y-12">
                {/* Hero Section */}
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-text-heading">GitHub Copilot</h1>
                    <p className="text-xl text-text-body max-w-2xl mx-auto">
                        Your AI pair programmer. I help developers write better code, faster.
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <CapabilityCard
                        icon="💻"
                        title="Code Generation"
                        description="Generate complete functions, classes, and components from natural language descriptions."
                        examples={["Create a React component", "Write a Python API endpoint", "Build a database schema"]}
                    />

                    <CapabilityCard
                        icon="🔧"
                        title="Code Completion"
                        description="Intelligent autocomplete that understands context and suggests the most relevant code."
                        examples={["Complete function signatures", "Suggest variable names", "Fill in boilerplate code"]}
                    />

                    <CapabilityCard
                        icon="🐛"
                        title="Debugging & Fixes"
                        description="Identify bugs, suggest fixes, and explain complex code issues in plain English."
                        examples={["Fix TypeScript errors", "Resolve runtime exceptions", "Optimize performance issues"]}
                    />

                    <CapabilityCard
                        icon="📚"
                        title="Learning & Documentation"
                        description="Help you learn new technologies and write comprehensive documentation."
                        examples={["Explain complex concepts", "Create API documentation", "Write code comments"]}
                    />

                    <CapabilityCard
                        icon="🔄"
                        title="Code Refactoring"
                        description="Improve code quality, performance, and maintainability through intelligent refactoring."
                        examples={["Modernize legacy code", "Extract reusable components", "Improve code structure"]}
                    />

                    <CapabilityCard
                        icon="🧪"
                        title="Testing & Quality"
                        description="Generate tests, ensure code quality, and maintain best practices."
                        examples={["Write unit tests", "Create integration tests", "Add error handling"]}
                    />
                </div>

                {/* Interactive Demo Section */}
                <div className="bg-card rounded-lg border p-8">
                    <h2 className="text-2xl font-bold mb-6 text-text-heading">What I Can Help You Build</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <DemoCard
                            title="Full-Stack Applications"
                            description="Complete web applications with modern frameworks"
                            tech={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
                        />
                        <DemoCard
                            title="API Development"
                            description="RESTful APIs and GraphQL endpoints"
                            tech={["Node.js", "Express", "FastAPI", "GraphQL"]}
                        />
                        <DemoCard
                            title="Database Design"
                            description="Schema design and data modeling"
                            tech={["PostgreSQL", "MongoDB", "Prisma", "SQL"]}
                        />
                        <DemoCard
                            title="DevOps & Deployment"
                            description="CI/CD pipelines and cloud deployment"
                            tech={["Docker", "AWS", "Vercel", "GitHub Actions"]}
                        />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center text-text-heading">Impact & Reach</h2>
                    <div className="grid gap-6 md:grid-cols-3 text-center">
                        <StatCard number="50M+" label="Developers Assisted" />
                        <StatCard number="20+" label="Languages Supported" />
                        <StatCard number="1000+" label="Hours Saved Daily" />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-text-heading">Ready to Code Together?</h2>
                    <p className="text-text-secondary max-w-md mx-auto">
                        Start using GitHub Copilot today and experience the future of software development.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            Get Started
                        </button>
                        <button className="border border-border px-6 py-2 rounded-lg font-medium hover:bg-accent transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function CapabilityCard({ icon, title, description, examples }: {
    icon: string
    title: string
    description: string
    examples: string[]
}) {
    return (
        <div className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="font-semibold mb-2 text-text-heading">{title}</h3>
            <p className="text-sm text-text-secondary mb-4">{description}</p>
            <ul className="text-xs space-y-1">
                {examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {example}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function DemoCard({ title, description, tech }: {
    title: string
    description: string
    tech: string[]
}) {
    return (
        <div className="border rounded-lg p-4 hover:border-primary/50 transition-colors">
            <h3 className="font-semibold mb-2 text-text-heading">{title}</h3>
            <p className="text-sm text-text-secondary mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                    <span key={t} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div>
            <div className="text-3xl font-bold text-primary mb-2">{number}</div>
            <div className="text-sm text-text-secondary">{label}</div>
        </div>
    )
}
