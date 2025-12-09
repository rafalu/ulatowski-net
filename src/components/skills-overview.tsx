"use client";

import skillsData from "@/config/skills.json";
import React from "react";

const levelLabelMap: Record<string, string> = {
    Expert: "Expert",
    VeryExperienced: "Very experienced",
    Experienced: "Experienced",
};

function levelToBadge(level?: string) {
    if (!level) return null;
    const label = levelLabelMap[level] ?? level;

    return (
        <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-text-secondary">
            {label}
        </span>
    );
}

function yearsToText(years?: string) {
    if (!years) return null;

    const map: Record<string, string> = {
        FifteenPlus: "15+ years",
        TenPlus: "10+ years",
        SevenPlus: "7+ years",
        FivePlus: "5+ years",
        ThreePlus: "3+ years",
        TwoPlus: "2+ years",
        OnePlus: "1+ year",
        LessThanOne: "< 1 year",
    };

    return map[years] ?? years;
}

interface SkillCardProps {
    title: string;
    subtitle?: string;
    items: {
        name: string;
        competenceLevel?: string;
        yearsOfExperience?: string;
    }[];
}

const SkillSectionCard: React.FC<SkillCardProps> = ({ title, subtitle, items }) => {
    return (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
            <header className="mb-3 flex items-baseline justify-between gap-2">
                <div>
                    <h3 className="text-sm font-semibold tracking-tight text-text-heading">{title}</h3>
                    {subtitle && (
                        <p className="text-xs text-text-tertiary">{subtitle}</p>
                    )}
                </div>
            </header>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                        key={item.name}
                        className="flex items-start justify-between gap-3 rounded-xl bg-muted/40 px-3 py-2"
                    >
                        <div className="text-xs leading-snug">
                            <p className="font-medium text-text-heading">{item.name}</p>
                            {item.yearsOfExperience && (
                                <p className="mt-0.5 text-[11px] text-text-tertiary">
                                    {yearsToText(item.yearsOfExperience)}
                                </p>
                            )}
                        </div>
                        <div className="mt-0.5 flex shrink-0 items-center gap-1">
                            {levelToBadge(item.competenceLevel)}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

const SecondaryPills: React.FC = () => {
    const typedSkillsData = skillsData as {
        coreSkills: Record<string, any[]>;
        secondarySkills: { name: string; competenceLevel?: string }[];
    };

    return (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-4">
            <h2 className="mb-2 text-sm font-semibold tracking-tight text-text-heading">
                Other / Secondary Skills
            </h2>
            <p className="mb-3 text-xs text-text-tertiary">
                Things I&apos;ve worked with in the past or use occasionally.
            </p>
            <div className="flex flex-wrap gap-2">
                {typedSkillsData.secondarySkills.map((s) => (
                    <span
                        key={s.name}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs text-text-body"
                    >
                        <span>{s.name}</span>
                        {s.competenceLevel && (
                            <span className="text-[10px] uppercase text-text-tertiary">
                                {levelLabelMap[s.competenceLevel] ?? s.competenceLevel}
                            </span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

const SkillsOverview: React.FC = () => {
    const typedSkillsData = skillsData as {
        coreSkills: {
            cloudAndDevOps: { name: string; competenceLevel?: string; yearsOfExperience?: string }[];
            backendDevelopment: { name: string; competenceLevel?: string; yearsOfExperience?: string }[];
            fullStackDevelopment: { name: string; competenceLevel?: string; yearsOfExperience?: string }[];
        };
        secondarySkills: { name: string; competenceLevel?: string }[];
    };

    const { coreSkills } = typedSkillsData;

    return (
        <>
            <section className="space-y-3 mt-6">
                <h2 className="text-sm font-semibold tracking-tight text-text-heading">
                    ⭐ Core Skills
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                    <SkillSectionCard
                        title="Cloud & DevOps"
                        subtitle="Azure, DevOps, IaC, CI/CD, security"
                        items={coreSkills.cloudAndDevOps}
                    />
                    <SkillSectionCard
                        title="Backend Development"
                        subtitle="C# / .NET, architecture, distributed systems"
                        items={coreSkills.backendDevelopment}
                    />
                    <SkillSectionCard
                        title="Full-Stack Development"
                        subtitle="TypeScript, React ecosystem, HTML/CSS"
                        items={coreSkills.fullStackDevelopment}
                    />
                </div>
            </section>

            <section className="space-y-3 mt-6">
                <SecondaryPills />
            </section>
        </>
    );
};

export default SkillsOverview;
