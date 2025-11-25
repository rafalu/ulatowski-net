import { JsonLd } from "@/components/json-ld";
import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const baseUrl = "https://ulatowski.net";
    
    // Build JSON-LD schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                ...(item.href ? { "item": `${baseUrl}${item.href}` } : {})
            }))
        ]
    };

    return (
        <>
            <JsonLd data={breadcrumbSchema} />
            <nav aria-label="Breadcrumb" className="mb-6">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Link href="/" className="hover:text-text-heading transition-colors">
                        Home
                    </Link>
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="text-text-tertiary">/</span>
                            {item.href ? (
                                <Link href={item.href} className="hover:text-text-heading transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-text-heading font-medium">{item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
}
