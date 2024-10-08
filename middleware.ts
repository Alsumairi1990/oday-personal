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
const locales = ['en', 'ar'];

export default async function middleware(req: NextRequest) {
  // Apply next-auth middleware for authentication
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;
 
  const match = pathname.match(/^\/(en|ar)\/(.+)/);
  const locale = match ? match[1] : 'en';
 console.log('locale###########'+locale);
 
    if ((pathname.startsWith(`/${locale}/admin`))) {

    if (!token) {
      // console.log('locale'+locale);
       const redirectUrl = new URL(`/${locale}/auth/signin`, req.url);
      redirectUrl.pathname = `/${locale}/auth/signin`;
      return NextResponse.redirect(redirectUrl);
    }
  }

  // Apply i18n middleware for localization
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/', 
    '/admin/:path*',                             
    '/services/:path*',             
    '/(en|ar)/services/:path*',  
    '/works/:path*',             
    '/(en|ar)/works/:path*',      
    '/(en|ar)/:path*',             
  ],
};


// export { default } from "next-auth/middleware";

// export const config = {
  // specify the route you want to protect


  // matcher: ['/','/admin/:path*','/services/:path*'],
  // matcher: ['/','/services/:path*'],
  // matcher: ['/services/:path*'],


// };