export { default } from "next-auth/middleware";

export const config = {
  // specify the route you want to protect


  // matcher: ['/','/admin/:path*','/services/:path*'],
  // matcher: ['/','/services/:path*'],
  matcher: ['/services/:path*'],


};