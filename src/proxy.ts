import siteConfig from "@/config/site-config.json";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    // Check if maintenance mode is enabled via config or env var
    // Env var takes precedence if set to 'true' or 'false'
    const envMaintenance = process.env.MAINTENANCE_MODE;
    const isMaintenanceMode = envMaintenance === 'true' 
        ? true 
        : envMaintenance === 'false' 
            ? false 
            : (siteConfig as any).comingSoon === true;

    const { pathname } = request.nextUrl;

    // Allow access to static files and API routes
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/files") ||
        pathname.startsWith("/images") ||
        pathname.startsWith("/og") ||
        pathname === "/favicon.ico" ||
        pathname === "/robots.txt" ||
        pathname === "/sitemap.xml"
    ) {
        return NextResponse.next();
    }

    // If in maintenance mode
    if (isMaintenanceMode) {
        // If already on coming-soon page, allow
        if (pathname === "/coming-soon") {
            return NextResponse.next();
        }
        // Otherwise redirect to coming-soon
        return NextResponse.redirect(new URL("/coming-soon", request.url));
    }

    // If NOT in maintenance mode
    if (!isMaintenanceMode) {
        // If trying to access coming-soon page, redirect to home
        if (pathname === "/coming-soon") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - files (public files)
         * - images (public images)
         * - og (open graph images)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|files|images|og|favicon.ico).*)",
    ],
};
