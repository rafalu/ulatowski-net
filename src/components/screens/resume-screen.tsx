"use client";
import { motion } from "framer-motion";
import { Briefcase, Download, GraduationCap } from "lucide-react";
import Link from "next/link";

export type WorkTimelineItem = {
    role: string;
    company: string;
    location?: string;
    period: string;
    bullets: string[];
};

type WorkTimelineProps = {
    title?: string;
    items?: WorkTimelineItem[];
};

const defaultItems: WorkTimelineItem[] = [
    {
        role: "Senior Cloud Architect",
        company: "Dawn Health",
        location: "Capital Region of Denmark",
        period: "September 2024 – Present",
        bullets: [
            "Architecting and developing cloud-native solutions on Azure.",
            "Focus on reliable and maintainable code using .NET and C#.",
        ],
    },
    {
        role: "Software Engineer Consultant",
        company: "Banking Circle",
        location: "Copenhagen Area",
        period: "January 2020 – March 2024",
        bullets: [
            "Contributed to the Banking Circle Payments API team, enhancing payment functionalities using custom REST API protocols and ISO20022 standards.",
            "Prioritized quality and performance, utilizing skills in Microsoft Azure, distributed applications, and .NET Core.",
            "Key technologies included C#, Azure DevOps Services, SQL, and ASP.NET Core.",
        ],
    },
    {
        role: "Software Engineering Consultant",
        company: "Saxo Bank",
        location: "Copenhagen Area",
        period: "December 2017 – January 2020",
        bullets: [
            "Focused on enhancing Saxo Bank's trading capabilities through RESTful APIs.",
            "Delivered core trading functionalities with a strong emphasis on quality and performance as part of the OpenAPI team.",
            "Employed TFS, VisualStudio, C#, .NET, ASP.NET, T-SQL, and Scrum methodologies.",
            "Expertise included distributed systems, microservices, and object-oriented programming.",
        ],
    },
    {
        role: "Senior Analyst",
        company: "Nordea Markets",
        location: "Copenhagen Area",
        period: "April 2014 – November 2017",
        bullets: [
            "Responsible for driving delivery of content-related solutions (news, research, charts, quotes) in Nordea e-Markets application.",
            "Implemented agile methodologies utilizing Atlassian toolbox (JIRA, Confluence).",
            "Worked with REST, C#, and Java code bases.",
        ],
    },
    {
        role: "Senior Software Developer",
        company: "Saxo Bank",
        location: "Copenhagen Area",
        period: "March 2009 – March 2014",
        bullets: [
            "Designed and developed front-end trading software, Saxo Trader.",
            "Contributed to usability improvements and implemented SSO in Saxo Trader.",
            "Utilized C#, .NET, Win-forms, and WPF, with a focus on problem-solving, teamwork, and quality.",
        ],
    },
    {
        role: "Senior Software Developer",
        company: "Interse A/S",
        location: "Copenhagen Area",
        period: "June 2005 – January 2009",
        bullets: [
            "Full-stack design and development of a web-based search engine for a content management repository.",
            "Worked with C#, ASP.NET, Ajax, WCF, WebServices, COM, C++, Win-forms, and MS SharePoint.",
        ],
    },
    {
        role: "Software Developer",
        company: "Bank Millennium SA Poland",
        location: "Poland",
        period: "December 2004 – May 2005",
        bullets: [
            "Design and development of web-based intranet banking solutions.",
            "UI design and implementation using C#, ASP.NET, Web Services, and JavaScript.",
        ],
    },
    {
        role: "Senior Software Developer",
        company: "SPEED SP. Z O.O Poland",
        location: "Poland",
        period: "January 2004 – December 2004",
        bullets: [
            "Developed workflow-based application using MSSQL/MySQL Server for TQM Systems.",
            "Worked with Apache, PHP, ASP, JavaScript, C, and Linux scripts.",
        ],
    },
];

const skillCards = [
    {
        id: "cloud-devops",
        label: "Azure cloud & DevOps platform",
        tagline: "Cloud-native systems that actually ship.",
        accent: "from-cyan-500/25 via-sky-500/25 to-emerald-500/25",
        icon: "☁️",
        points: [
            "Distributed systems on Azure (App Service, Functions, containers)",
            "Event-driven & microservices architectures for real-time workloads",
            "CI/CD with Azure DevOps & GitHub Actions, reusable YAML pipelines",
            "Terraform/Bicep IaC, VNets, Private Endpoints, Key Vault & App Insights",
        ],
    },
    {
        id: "backend",
        label: "Backend engineering (.NET)",
        tagline: "Low-friction, high-reliability backend services.",
        accent: "from-amber-500/25 via-orange-500/25 to-rose-500/25",
        icon: "🧠",
        points: [
            ".NET 8 / C# services designed for clarity and performance",
            "Multithreading, messaging and resiliency patterns under load",
            "Modernizing legacy .NET into modular, cloud-friendly architectures",
            "Working across trading, payments and other high-stakes systems",
        ],
    },
    {
        id: "frontend",
        label: "Frontend & integration",
        tagline: "Enough UI skills to keep the whole system coherent.",
        accent: "from-indigo-500/25 via-blue-500/25 to-sky-500/25",
        icon: "🖥️",
        points: [
            "JavaScript, HTML, CSS for web front-ends and integration",
            "Close collaboration between backend APIs and UI needs",
            "Debugging issues end-to-end across client, API and cloud",
            "Using AI to speed up UI prototypes and developer experience",
        ],
    },
];

function SkillsSection() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-8 text-foreground">
            <div className="mb-6 md:mb-8">
                <h2 className="text-xl font-semibold md:text-2xl">Skills</h2>
                <p className="text-sm text-muted-foreground mt-2">Discover the proficiencies that allow me to bring imagination to life through design and engineering.</p>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-y-10 mt-6">
                {skillCards.map((card, i) => (
                    <div key={card.id} className="" style={{ transitionDelay: `${i * 100}ms`, animationDelay: `${i * 100}ms` }}>
                        <div className="flex flex-row max-w-full sm:max-w-md">
                            <div className="flex items-start mr-3 mt-1">
                                <span className="text-xl">{card.icon}</span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold md:text-2xl">{card.label}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{card.tagline}</p>
                                <div className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                                    {card.points.map((p, idx) => (
                                        <p key={idx} className="mt-1 first:mt-0">{p}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CTASection() {
    return (
        <div className="mx-auto px-4 relative lg:py-8 md:px-6 md:py-8 py-8 text-foreground max-w-6xl">
            <div className="mx-auto max-w-3xl border border-border p-6 rounded-md shadow-xl text-center bg-card">
                <div className="md:mx-auto text-center mb-0 md:mb-0">
                    <h2 className="font-bold font-heading leading-tighter tracking-tighter md:text-4xl mb-4 text-4xl">Let's create together</h2>
                    <p className="text-muted-foreground mt-4 text-xl">Ready to transform your vision into captivating designs?</p>
                </div>

                <div className="flex flex-col flex-nowrap gap-4 m-auto max-w-xs sm:flex-row sm:justify-center sm:max-w-md mt-6">
                    <div className="flex w-full sm:w-auto">
                        <Link href="/contact" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-[#ff6b3d] hover:bg-[#ff825d] transition shadow-lg shadow-[#ff6b3d]/30 text-white">
                            Hire me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WorkExperienceTimeline({
    title = "Work experience",
    items = defaultItems,
}: WorkTimelineProps) {
    return (
        <section className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="w-full rounded-3xl bg-card px-6 py-8 text-foreground shadow-xl dark:shadow-black/40 md:px-10 md:py-10 border border-border">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>

                    <ol className="mt-8 space-y-8 md:space-y-10">
                        {items.map((item, idx) => (
                            <li
                                key={item.role + idx}
                                className="flex items-start"
                            >
                                {/* Icon + connecting line */}
                                <div className="mr-4 flex flex-col items-center rtl:ml-4 rtl:mr-0">
                                    <div className="flex items-center justify-center">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sky-400/90 bg-slate-900 p-2 text-sky-200 shadow-[0_0_0_4px_rgba(15,23,42,1)]">
                                            <Briefcase className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                    </div>
                                    {idx !== items.length - 1 && (
                                        <div className="flex-1 w-px bg-slate-500/60 dark:bg-slate-400/70" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pt-1 pb-6 md:pb-8 flex-1">
                                    <h3 className="text-xl font-bold md:text-2xl">
                                        {item.role}
                                        <br />
                                        <span className="font-normal text-base md:text-lg">
                                            {item.company}
                                            {item.location ? `, ${item.location}` : null}
                                        </span>
                                        <br />
                                        <span className="text-sm font-normal text-slate-300">
                                            {item.period}
                                        </span>
                                    </h3>

                                    <div className="mt-2 text-sm leading-relaxed text-slate-300 md:text-[15px]">
                                        {item.bullets.map((bullet, idx2) => (
                                            <p key={idx2} className="mt-1 first:mt-0">
                                                {bullet}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>

                    {/* EDUCATION */}
                    <div className="mt-12">
                        <h3 className="text-xl font-semibold md:text-2xl">Education</h3>
                        <ul className="mt-6 space-y-6">
                            <li className="flex items-start">
                                <div className="mr-4 flex items-start">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sky-400/90 bg-slate-900 p-2 text-sky-200 shadow-[0_0_0_4px_rgba(15,23,42,1)]">
                                        <GraduationCap className="h-5 w-5" aria-hidden />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Master of Science, Distributed System</h4>
                                    <p className="text-sm text-slate-300">Gdańsk University of Technology</p>
                                    <p className="text-sm text-slate-400 mt-1">1999 - 2004</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Skills placed after Education as requested */}
            <SkillsSection />
            <CTASection />
        </section>
    );
}

export function ResumeScreen() {
    return (
        <div className="pt-24 pb-16">
            <div className="mx-auto max-w-6xl px-4 mb-12">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Resume & Experience
                </motion.h1>
                <motion.p
                    className="text-lg text-slate-300 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Professional background of a Senior Azure Cloud Architect & .NET Consultant. Experience with Azure, .NET, DevOps, and cloud migrations.
                </motion.p>
                <div className="mt-6 flex gap-3">
                    <a href="/files/cv.pdf" download="Rafal_Ulatowski_CV.pdf" aria-label="Download CV (PDF)" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent text-white px-5 py-2.5 font-medium hover:bg-white/10 hover:text-sky-300 transition-colors w-full justify-center max-w-xs">
                        <Download className="size-4" />
                        <span>Download CV (PDF)</span>
                    </a>
                </div>
            </div>
            <WorkExperienceTimeline />
        </div>
    );
}
