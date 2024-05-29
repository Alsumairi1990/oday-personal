export { default } from "next-auth/middleware";

export const config = {
  // specify the route you want to protect
  matcher: ["/((?!.*\\.(?:png|jpg|jpeg|svg|gif|ico|xml|json|txt|css|js)).*)"],

};