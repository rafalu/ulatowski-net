import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Topbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block">
                            My App
                        </span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Portfolio
                        </Link>
                    </nav>
                    <nav className="flex items-center">
                        <div className="flex w-full sm:w-auto">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[#ff6b3d] hover:bg-[#ff825d] transition shadow-lg shadow-[#ff6b3d]/30">
                                Hire me
                            </Link>
                        </div>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}