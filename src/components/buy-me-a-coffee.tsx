"use client"

import React, { useMemo, useState } from "react";

/**
 * BuyMeACoffee — beautiful React + Tailwind demo
 * - Responsive 2‑column layout
 * - Profile card, Creator teaser, Recent supporters, Buy Coffee panel
 * - Accessible forms, keyboard‑friendly quantity selector
 * - Light/Dark ready (uses Tailwind's `dark` classes)
 * - Includes tiny runtime smoke tests (console.assert) for helpers
 */

// --- UI helpers (tested below) ---
function clampQuantity(n: any): number {
    const v = Number(n);
    return Number.isFinite(v) && v >= 1 ? Math.floor(v) : 1;
}
function computeTotal(qty: number, price: number): number {
    return qty * price;
}

export default function BuyMeACoffeeDemo() {
    const [qty, setQty] = useState(3);
    const [name, setName] = useState("");
    const [handle, setHandle] = useState("");
    const [message, setMessage] = useState("");
    const pricePerCoffee = 5; // demo
    const total = useMemo(() => computeTotal(qty, pricePerCoffee), [qty]);

    // Smooth scroll + focus/highlight API provided by the right panel
    const supportApi = React.useRef({ focus: () => { }, highlight: () => { } });
    const onCtaJump = () => {
        const el = document.getElementById("support");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => {
            supportApi.current.focus?.();
            supportApi.current.highlight?.();
        }, 350);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
            <div className="mx-auto w-full max-w-6xl px-4 py-10">
                {/* Header */}
                <header className="mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            Building a full‑stack "Buy me a coffee" demo
                        </h1>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Clean React + Tailwind UI • no fluff • mobile‑first • keyboard friendly
                        </p>
                    </div>
                </header>

                {/* Content */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Left column */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <ProfileCard />
                        <CreatorTeaserCard onCtaClick={onCtaJump} />
                        <SupportersCard />
                    </div>

                    {/* Right column */}
                    <div className="md:col-span-1">
                        <BuyCoffeeCard
                            qty={qty}
                            setQty={setQty}
                            name={name}
                            setName={setName}
                            handle={handle}
                            setHandle={setHandle}
                            message={message}
                            setMessage={setMessage}
                            pricePerCoffee={pricePerCoffee}
                            total={total}
                            exposeAPI={(api) => (supportApi.current = api)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Card({ className = "", children, id }: { className?: string; children: React.ReactNode; id?: string }) {
    return (
        <div
            id={id}
            className={
                "rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow transition dark:border-slate-800 dark:bg-slate-900/70 " +
                className
            }
        >
            {children}
        </div>
    );
}

function ProfileCard() {
    return (
        <Card>
            <div className="flex items-center gap-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-4 ring-slate-100 dark:ring-slate-800">
                    {/* avatar */}
                    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-indigo-500 to-sky-500 text-white text-2xl font-bold">
                        T
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-semibold leading-tight">Tuan Phung</h2>
                    <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">Web3 developer</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        A web developer who enjoys working with OSS and Web3 stuff.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-slate-500">
                        <IconButton label="Like"><HeartIcon className="h-4 w-4" /></IconButton>
                        <IconButton label="Share"><ShareIcon className="h-4 w-4" /></IconButton>
                        <IconButton label="Twitter"><TwitterIcon className="h-4 w-4" /></IconButton>
                        <IconButton label="GitHub"><GitHubIcon className="h-4 w-4" /></IconButton>
                        <IconButton label="Link"><LinkIcon className="h-4 w-4" /></IconButton>
                    </div>
                </div>
            </div>
        </Card>
    );
}

function CreatorTeaserCard({ onCtaClick }: { onCtaClick: () => void }) {
    const [expanded, setExpanded] = React.useState(false);
    const perks = [
        "Open‑source maintenance",
        "Tutorials & write‑ups",
        "Coffee for late nights",
    ];
    const progress = 62; // demo monthly goal progress

    return (
        <Card>
            <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">☕</div>
                <div className="flex-1">
                    <h3 className="text-base font-semibold tracking-tight">Why your coffee matters</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Tiny tips fund big things: docs, bugfixes, and free examples for the community.
                    </p>

                    {/* perks */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {perks.map((p) => (
                            <span key={p} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
                                {p}
                            </span>
                        ))}
                    </div>

                    {/* progress */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>Monthly goal</span>
                            <span className="tabular-nums">{progress}%</span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div className="h-full bg-emerald-500" style={{ width: `${progress}%` }} />
                        </div>
                    </div>

                    {/* teaser expandable */}
                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={() => setExpanded((v) => !v)}
                            className="text-sm font-medium text-slate-900 underline-offset-2 hover:underline dark:text-slate-100"
                        >
                            {expanded ? "Show less" : "Read my short note"}
                        </button>
                        {expanded && (
                            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                                Hey! I build free, copy‑pasteable UI and publish code walkthroughs every week. Your coffee keeps
                                the content ad‑free and lets me spend more time answering community questions. If my work saved
                                you an hour, consider fueling the next tutorial.
                            </p>
                        )}
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={onCtaClick}
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 dark:bg-indigo-600 dark:hover:bg-indigo-500"
                        >
                            <CoffeeIcon className="h-4 w-4" />
                            Support now
                        </button>
                        <span className="text-xs text-slate-500">It only takes 10 seconds.</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

function SupportersCard() {
    const items = [
        { id: 1, name: "Someone", qty: 3, emoji: "☕️", date: "Dec 31, 2021", ago: "02:32:55" },
        { id: 2, name: "Someone", qty: 10, emoji: "🔥", date: "09/11/2023", ago: "13:36:44" },
    ];
    return (
        <Card>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base font-semibold">Recent supporters</h3>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    Live
                </span>
            </div>
            <ul className="space-y-3">
                {items.map((x) => (
                    <li key={x.id} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-lg dark:bg-slate-800">
                                {x.emoji}
                            </div>
                            <div>
                                <p className="font-medium">
                                    {x.name} bought <span className="font-semibold">{x.qty} coffee{x.qty > 1 ? "s" : ""}</span>
                                </p>
                                <p className="text-xs text-slate-500">{x.date}</p>
                            </div>
                        </div>
                        <span className="text-xs tabular-nums text-slate-500">{x.ago}</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}

function BuyCoffeeCard({
    qty,
    setQty,
    name,
    setName,
    handle,
    setHandle,
    message,
    setMessage,
    pricePerCoffee,
    total,
    exposeAPI
}: {
    qty: number;
    setQty: (qty: number) => void;
    name: string;
    setName: (name: string) => void;
    handle: string;
    setHandle: (handle: string) => void;
    message: string;
    setMessage: (message: string) => void;
    pricePerCoffee: number;
    total: number;
    exposeAPI: (api: { focus: () => void; highlight: () => void }) => void;
}) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [highlight, setHighlight] = React.useState(false);
    const nameRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        exposeAPI?.({
            focus: () => nameRef.current?.focus(),
            highlight: () => {
                setHighlight(true);
                window.setTimeout(() => setHighlight(false), 1200);
            },
        });
    }, [exposeAPI]);

    return (
        <Card id="support" className={`sticky top-6 ${highlight ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950/0' : ''}`}>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base font-semibold flex items-center gap-2">
                    Buy <span className="inline-flex items-center gap-1">Tuan a coffee <span>☕️</span></span>
                </h3>
                <span className="rounded-md border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300">
                    Testnet
                </span>
            </div>

            {/* Quantity selector */}
            <div className="mb-4">
                <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">Quantity</label>
                <div className="grid grid-cols-4 gap-2">
                    {[1, 3, 5].map((n) => (
                        <button
                            key={n}
                            type="button"
                            onClick={() => setQty(n)}
                            className={
                                "group relative inline-flex items-center justify-center gap-1 rounded-xl border px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 " +
                                (qty === n
                                    ? "border-indigo-600 bg-indigo-600 text-white shadow"
                                    : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800")
                            }
                            aria-pressed={qty === n}
                        >
                            <span className="hidden sm:inline">x</span>
                            {n}
                        </button>
                    ))}
                    <div className="relative">
                        <input
                            type="number"
                            min={1}
                            value={qty}
                            onChange={(e) => setQty(clampQuantity(e.target.value))}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                            aria-label="Custom quantity"
                        />
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">custom</span>
                    </div>
                </div>
            </div>

            {/* Form */}
            {!success ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        // simulate async payment
                        setTimeout(() => {
                            setIsSubmitting(false);
                            setSuccess(true);
                        }, 900);
                    }}
                    className="space-y-3"
                >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400" htmlFor="name">Name</label>
                            <input
                                id="name"
                                ref={nameRef}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                                placeholder="Your name (optional)"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400" htmlFor="handle">@twitter</label>
                            <input
                                id="handle"
                                value={handle}
                                onChange={(e) => setHandle(e.target.value)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                                placeholder="@twitter (optional)"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400" htmlFor="msg">Message</label>
                        <textarea
                            id="msg"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Thank you for the support. Feel free to leave a comment…"
                            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            <span className="font-medium">${pricePerCoffee}</span> per coffee • Total <span className="font-semibold tabular-nums">${total}</span>
                        </p>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 disabled:opacity-70 dark:bg-indigo-600 dark:hover:bg-indigo-500"
                        >
                            <CoffeeIcon className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                            {isSubmitting ? 'Processing…' : `Support with ×${qty}`}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">✔</div>
                        <div className="flex-1">
                            <h4 className="text-base font-semibold">Thank you for the support!</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">You sent ×{qty} coffee(s). A receipt has been emailed. Want to leave a note or share?</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button type="button" className="rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">Write a public note</button>
                        <button type="button" className="rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">Share on X</button>
                        <button type="button" className="rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700" onClick={() => setSuccess(false)}>Send another</button>
                    </div>
                </div>
            )}
        </Card>
    );
}

function IconButton({ children, label }: { children: React.ReactNode; label: string }) {
    return (
        <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 p-0 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition dark:border-slate-800 dark:hover:bg-slate-800"
            aria-label={label}
            title={label}
            type="button"
            onClick={(e) => e.preventDefault()}
        >
            {children}
        </button>
    );
}

/* --- Minimal inline icons (no external deps) --- */
function CoffeeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M3 8h14v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z" />
            <path d="M17 8h3a2 2 0 0 1 0 4h-3" />
            <path d="M6 2v2M10 2v2M14 2v2" />
        </svg>
    );
}
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 5.5 0 0 0 0-7.8z" />
        </svg>
    );
}
function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.6 13.5l6.8 3.9M15.4 6.6L8.6 10.5" />
        </svg>
    );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M19.633 7.997c.013.18.013.36.013.541 0 5.507-4.194 11.855-11.855 11.855-2.357 0-4.546-.693-6.385-1.886.33.038.648.05.99.05a8.39 8.39 0 0 0 5.2-1.786 4.196 4.196 0 0 1-3.915-2.9c.257.038.514.063.783.063.373 0 .747-.05 1.095-.14A4.187 4.187 0 0 1 1.64 9.69v-.05c.597.33 1.29.53 2.02.553A4.192 4.192 0 0 1 2.4 7.02c0-.777.206-1.49.566-2.112a11.9 11.9 0 0 0 8.63 4.38 4.735 4.735 0 0 1-.103-.962 4.19 4.19 0 0 1 7.248-2.866 8.25 8.25 0 0 0 2.662-1.01 4.2 4.2 0 0 1-1.842 2.31 8.39 8.39 0 0 0 2.41-.655 9.01 9.01 0 0 1-2.238 2.272z" />
        </svg>
    );
}
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.012c0 4.427 2.865 8.18 6.839 9.505.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.112-4.555-4.946 0-1.092.39-1.986 1.03-2.686-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.53 9.53 0 0 1 2.506.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.842-2.338 4.69-4.566 4.938.359.31.678.92.678 1.855 0 1.338-.012 2.416-.012 2.744 0 .267.18.578.688.48C19.138 20.192 22 16.44 22 12.012 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
        </svg>
    );
}
function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
            <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
        </svg>
    );
}

// --- Tiny runtime smoke tests (dev only) ---
if (typeof window !== "undefined") {
    console.assert(computeTotal(3, 5) === 15, "computeTotal should multiply correctly");
    console.assert(clampQuantity(0) === 1, "clampQuantity should clamp to 1");
    console.assert(clampQuantity("7") === 7, "clampQuantity should coerce numeric strings");
}