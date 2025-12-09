"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { motion } from "framer-motion";
import { Briefcase, Download, GraduationCap } from "lucide-react";
import Link from "next/link";

export type ProjectTimelineItem = {
    role: string;
    company: string;
    location?: string;
    period: string;
    bullets: string[];
};

type ProjectTimelineProps = {
    title?: string;
    items?: ProjectTimelineItem[];
};

const defaultItems: ProjectTimelineItem[] = [
    {
        role: "Senior Cloud Engineer",
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



function CTASection() {
    return (
        <div className="mx-auto px-4 relative lg:py-8 md:px-6 md:py-8 py-8 text-foreground max-w-6xl">
            <div className="mx-auto max-w-3xl border border-border p-6 rounded-md shadow-xl text-center bg-card">
                <div className="md:mx-auto text-center mb-0 md:mb-0">
                    <h2 className="font-bold font-heading leading-tighter tracking-tighter md:text-4xl mb-4 text-4xl text-text-heading">Let&apos;s build something that ships</h2>
                    <p className="text-text-secondary mt-4 text-xl">Need someone who delivers complete, production-ready systems? <Link href="/skills" className="text-[#ff6b3d] hover:underline">View my technical skills</Link>.</p>
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
}: ProjectTimelineProps) {
    return (
        <section className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="w-full rounded-3xl bg-card px-6 py-8 text-foreground shadow-xl dark:shadow-black/40 md:px-10 md:py-10 border border-border">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-text-heading">{title}</h2>

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
                                        <span className="text-sm font-normal text-text-secondary">
                                            {item.period}
                                        </span>
                                    </h3>

                                    <div className="mt-2 text-sm leading-relaxed text-text-secondary md:text-[15px]">
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
                        <h3 className="text-xl font-semibold md:text-2xl text-text-heading">Education</h3>
                        <ul className="mt-6 space-y-6">
                            <li className="flex items-start">
                                <div className="mr-4 flex items-start">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sky-400/90 bg-slate-900 p-2 text-sky-200 shadow-[0_0_0_4px_rgba(15,23,42,1)]">
                                        <GraduationCap className="h-5 w-5" aria-hidden />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-text-heading">Master of Science, Distributed System</h4>
                                    <p className="text-sm text-text-secondary">Gdańsk University of Technology</p>
                                    <p className="text-sm text-text-tertiary mt-1">1999 - 2004</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CTASection />
        </section>
    );
}

export function ProjectsScreen() {
    return (
        <div className="pb-16">
            <div className="mx-auto max-w-6xl px-4 mb-12">
                <Breadcrumbs items={[{ label: "Projects" }]} />
                <motion.h1
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-text-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Track Record: Systems I&apos;ve Built & Shipped
                </motion.h1>
                <motion.p
                    className="text-lg text-text-body max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    15+ years of building and shipping production systems — from .NET backends to complete Azure cloud platforms. Here&apos;s what I&apos;ve actually delivered.
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
