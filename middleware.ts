import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'ar', // Set 'ar' as the default locale
});

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;

  // Extract locale from the pathname
  const match = pathname.match(/^\/(en|ar)\/(.+)/);
  const locale = match ? match[1] : 'ar'; // Default to 'ar' if no locale is specified

  console.log('Detected locale:', locale);

  // Redirect to the default locale if no locale is specified
  if (!pathname.startsWith(`/en`) && !pathname.startsWith(`/ar`)) {
    const url = req.nextUrl.clone();
    url.pathname = `/ar${pathname}`; // Redirect to 'ar' by default
    return NextResponse.redirect(url);
  }

  // Handle admin routes
  if (pathname.startsWith(`/${locale}/admin`)) {
    if (!token) {
      const redirectUrl = new URL(`/${locale}/auth/signin`, req.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

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
    '/plans/:path*',
    '/(en|ar)/plans/:path*',
    '/industries/:path*',
    '/(en|ar)/industries/:path*',
    '/technologies/:path*',
    '/(en|ar)/technologies/:path*',
    '/packages/:path*',
    '/(en|ar)/packages/:path*',
    '/markets/:path*',
    '/(en|ar)/markets/:path*',
    '/blog/:path*',
    '/(en|ar)/blog/:path*',
    '/products/:path*',
    '/(en|ar)/products/:path*',
    '/auth/:path*',
    '/(en|ar)/auth/:path*',
    '/(en|ar)/:path*',
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
//     '/plans/:path*',             
//     '/(en|ar)/plans/:path*', 
//     '/industries/:path*',             
//     '/(en|ar)/industries/:path*', 
//     '/technologies/:path*',             
//     '/(en|ar)/technologies/:path*',
//     '/packages/:path*',             
//     '/(en|ar)/packages/:path*', 
//     '/markets/:path*',             
//     '/(en|ar)/markets/:path*', 
//     '/blog/:path*',             
//     '/(en|ar)/blog/:path*', 
//     '/products/:path*',             
//     '/(en|ar)/products/:path*',       
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