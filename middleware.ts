
// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Create the i18n middleware
const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Detect locale from URL or default to 'en'
  const match = pathname.match(/^\/(en|ar)/);
  const locale = match ? match[1] : 'en';

  console.log('Detected locale: ' + locale);

  // Apply authentication check for '/admin' routes
  if (pathname.startsWith(`/${locale}/admin`)) {
    const token = await getToken({ req }); // Ensure that the JWT token is fetched properly

    // If no token is found, redirect to the localized login page
    if (!token) {
      const redirectUrl = new URL(`/${locale}/auth/signin`, req.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // Apply the i18n middleware for locale handling
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/',                               // Match homepage
    '/admin/:path*',                   // Secure all admin routes
    '/(en|ar)/admin/:path*',            // Secure localized admin routes
    '/services/:path*',                // Match services route
    '/(en|ar)/services/:path*',         // Match localized services route
    '/works/:path*',                   // Match works route
    '/(en|ar)/works/:path*',            // Match localized works route
    '/(en|ar)/:path*',                 // Catch all for localized routes
  ],
};

// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';  // Make sure to import necessary functions
// import createIntlMiddleware from 'next-intl/middleware';
// import nextAuthMiddleware from 'next-auth/middleware';
// import { NextRequest } from 'next/server';

// const intlMiddleware = createIntlMiddleware({
//   locales: ['en', 'ar'],
//   defaultLocale: 'en',
// });
// const locales = ['en', 'ar'];

// export default async function middleware(req: NextRequest) {
//   const token = await getToken({ req });
//   const pathname = req.nextUrl.pathname;
//   const match = pathname.match(/^\/(en|ar)\/(.+)/);
//   const locale = match ? match[1] : 'en';
//  console.log('locale###########'+locale);
//     if ((pathname.startsWith(`/${locale}/admin`))) {
//     if (!token) {
//        const redirectUrl = new URL(`/${locale}/auth/signin`, req.url);
//       redirectUrl.pathname = `/${locale}/auth/signin`;
//       return NextResponse.redirect(redirectUrl);
//     }
//   }

//   return intlMiddleware(req);
// }

// export const config = {
//   matcher: [
//     '/', 
//     '/admin/:path*',                             
//     '/services/:path*',             
//     '/(en|ar)/services/:path*',  
//     '/works/:path*',             
//     '/(en|ar)/works/:path*',      
//     '/(en|ar)/:path*',             
//   ],
// };


// export { default } from "next-auth/middleware";

// export const config = {
  // specify the route you want to protect


  // matcher: ['/','/admin/:path*','/services/:path*'],
  // matcher: ['/','/services/:path*'],
  // matcher: ['/services/:path*'],


// };