// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';  // Make sure to import necessary functions
import createIntlMiddleware from 'next-intl/middleware';
import nextAuthMiddleware from 'next-auth/middleware';
import { NextRequest } from 'next/server';

// Create the i18n middleware
const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export default async function middleware(req: NextRequest) {
  // Apply next-auth middleware for authentication
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;

  // Protect /services and /admin routes
  if (pathname.startsWith('/services') || pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Apply i18n middleware for localization
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/', 
    '/admin/:path*',                             // Home route (unlocalized)
    '/services/:path*',             // Protect /services and all subpaths (unlocalized)
    '/(en|ar)/services/:path*',     // Protect /services and all subpaths with locale (e.g., /en/services/1)
    '/(en|ar)/:path*',              // Apply i18n middleware for other localized routes
  ],
};


// export { default } from "next-auth/middleware";

// export const config = {
  // specify the route you want to protect


  // matcher: ['/','/admin/:path*','/services/:path*'],
  // matcher: ['/','/services/:path*'],
  // matcher: ['/services/:path*'],


// };