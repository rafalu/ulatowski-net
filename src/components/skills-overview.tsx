"use client";

import skillsData from "@/config/skills.json";
import React from "react";

// Map competence levels to a 1-5 scale
const levelToScore: Record<string, number> = {
    Expert: 5,
    VeryExperienced: 4,
    Experienced: 3,
};

const levelLabelMap: Record<string, string> = {
    Expert: "Expert",
    VeryExperienced: "Very experienced",
    Experienced: "Experienced",
};

function levelToBadge(level?: string) {
    if (!level) return null;

    const score = levelToScore[level] ?? 3;
    const maxScore = 5;
    const label = levelLabelMap[level] ?? level;

    return (
        <div className="flex flex-col items-end gap-1.5">
            {/* Progress dots */}
            <div className="flex items-center gap-1" aria-label={`${label} proficiency`}>
                {Array.from({ length: maxScore }).map((_, index) => {
                    const isFilled = index < score;
                    return (
                        <span
                            key={index}
                            className={`inline-block h-2 w-2 rounded-full border transition-colors duration-200 ${isFilled
                                    ? "border-sky-300 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 shadow-[0_0_6px_rgba(56,189,248,0.6)]"
                                    : "border-white/20 bg-white/10"
                                }`}
                            title={label}
                            aria-hidden="true"
                        />
                    );
                })}
            </div>
            {/* Score label */}
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-tertiary">
                {score}/{maxScore}
            </span>
        </div>
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
    items: SkillEntry[];
}

type SkillEntry = {
    name: string;
    competenceLevel?: string;
    yearsOfExperience?: string;
};

type SkillsData = {
    coreSkills: {
        cloudAndDevOps: SkillEntry[];
        backendDevelopment: SkillEntry[];
        fullStackDevelopment: SkillEntry[];
    };
    secondarySoftSkills: SkillEntry[];
    deliverySkills: SkillEntry[];
    sideSpecializations: SkillEntry[];
};

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

const SkillsOverview: React.FC = () => {
    const typedSkillsData = skillsData as SkillsData;
    const { coreSkills, secondarySoftSkills, deliverySkills, sideSpecializations } = typedSkillsData;

    return (
        <div className="space-y-6">
            <div className="space-y-3">
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
            </div>

            <div className="space-y-6">
                <div className="space-y-3">
                    <h2 className="text-sm font-semibold tracking-tight text-text-heading">
                        🤝 Soft Skills &amp; Delivery Excellence
                    </h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        <SkillSectionCard
                            title="Soft Skills"
                            subtitle="Human-centered strengths"
                            items={secondarySoftSkills}
                        />
                        <SkillSectionCard
                            title="Delivery Leadership"
                            subtitle="Proven ways of working"
                            items={deliverySkills}
                        />
                        <SkillSectionCard
                            title="Trading Specializations"
                            subtitle="Niche expertise in financial markets"
                            items={sideSpecializations}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsOverview;
