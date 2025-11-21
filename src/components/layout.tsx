import { Topbar } from "@/components/topbar"

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <Topbar />
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}