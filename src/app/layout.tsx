import { JsonLd } from "@/components/json-ld";
import { Footer, Header } from "@/components/layout-components";
import { ComingSoonScreen } from "@/components/screens/coming-soon-screen";
import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/components/theme-provider";
import siteConfig from "@/config/site-config.json";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/social";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ulatowski.net"),
  title: "Rafał Ulatowski | I Build .NET Systems That Run Reliably in the Cloud",
  description:
    "I build and ship production-ready .NET systems on Azure — from writing solid code to deploying complete cloud infrastructure. End-to-end delivery: code, cloud, CI/CD. Based in Copenhagen, available across EU/UK/US.",
  keywords:
    "Azure Cloud Architect, .NET Developer, Azure Developer, Cloud Developer Copenhagen, End-to-end Cloud Delivery, Azure Bicep, IaC, CI/CD, Production Systems, Azure DevOps, GitHub Actions, .NET 8, C# Developer, Cloud Migration, Azure Infrastructure",
  authors: [{ name: "Rafał Ulatowski" }],
  creator: "Rafał Ulatowski",
  publisher: "Rafał Ulatowski",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Rafał Ulatowski | I Build .NET Systems That Run Reliably in the Cloud",
    description:
      "I build and ship production-ready .NET systems on Azure — from writing solid code to deploying complete cloud infrastructure. End-to-end delivery: code, cloud, CI/CD.",
    url: "https://ulatowski.net",
    type: "website",
    locale: "en_US",
    siteName: "Rafał Ulatowski – Azure & .NET Developer",
    images: [
      {
        url: "/og/azure-cloud-architect.webp",
        width: 1200,
        height: 630,
        alt: "Rafał Ulatowski – Building Production-Ready Cloud Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rafał Ulatowski | I Build .NET Systems That Run Reliably in the Cloud",
    description:
      "I build and ship production-ready .NET systems on Azure — from writing solid code to deploying complete cloud infrastructure. End-to-end delivery: code, cloud, CI/CD.",
    images: ["/og/azure-cloud-architect.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === 'production';
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;
  const HOTJAR_SV = process.env.NEXT_PUBLIC_HOTJAR_SV ?? '6';
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect and DNS prefetch for performance */}
        <link rel="preconnect" href="https://ulatowski.net" />
        <link rel="dns-prefetch" href="https://ulatowski.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {isProd && GA_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          </>
        )}
        {isProd && HOTJAR_ID && (
          <>
            <link rel="preconnect" href="https://static.hotjar.com" />
            <link rel="dns-prefetch" href="https://static.hotjar.com" />
          </>
        )}
        {/* Google Analytics (only in production when NEXT_PUBLIC_GA_ID is set) */}
        {isProd && GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`
              }}
            />
          </>
        )}
        {/* Hotjar Tracking Code (only in production when NEXT_PUBLIC_HOTJAR_ID is set) */}
        {isProd && HOTJAR_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${HOTJAR_ID},hjsv:${HOTJAR_SV}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
            }}
          />
        )}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://ulatowski.net/#person",
                "name": "Rafal Ulatowski",
                "alternateName": "Rafał Ulatowski",
                "url": "https://ulatowski.net/",
                "image": "https://ulatowski.net/images/profile.jpg",
                "jobTitle": "Senior Azure Cloud Architect & .NET Developer",
                "description": "I build and ship production-ready .NET systems on Azure. Developer by heart, architect by experience.",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Dawn Health"
                },
                "nationality": "Polish",
                "knowsLanguage": ["English", "Polish", "Danish"],
                "homeLocation": {
                  "@type": "Place",
                  "name": "Copenhagen, Denmark"
                },
                "sameAs": [
                  LINKEDIN_URL,
                  GITHUB_URL
                ],
                "knowsAbout": [
                  "Microsoft Azure",
                  ".NET 8 Development",
                  "C# Backend Development",
                  "Azure Cloud Infrastructure",
                  "Production System Delivery",
                  "Azure DevOps",
                  "CI/CD Pipelines",
                  "Infrastructure as Code",
                  "Azure Bicep",
                  "Terraform",
                  "Distributed Systems",
                  "High-Performance Systems",
                  "Trading Platforms",
                  "Payment Systems",
                  "Cloud Migration",
                  "Microservices"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Copenhagen",
                  "addressCountry": "Denmark"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://ulatowski.net/#website",
                "url": "https://ulatowski.net/",
                "name": "Rafał Ulatowski – Azure & .NET Developer",
                "publisher": {
                  "@id": "https://ulatowski.net/#person"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://ulatowski.net/#webpage",
                "url": "https://ulatowski.net/",
                "name": "I Build .NET Systems That Run Reliably in the Cloud",
                "isPartOf": {
                  "@id": "https://ulatowski.net/#website"
                },
                "about": {
                  "@id": "https://ulatowski.net/#person"
                }
              }
            ]
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {siteConfig.comingSoon ? (
            <ComingSoonScreen />
          ) : (
            <SiteShell>
              <Header />
              <main className="min-h-[calc(100vh-14rem)]">
                {children}
              </main>
              <Footer />
            </SiteShell>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
