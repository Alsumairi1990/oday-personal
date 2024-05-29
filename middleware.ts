export { default } from "next-auth/middleware";

export const config = {
  // specify the route you want to protect
  matcher: [
    "^/admin(?=/.*)?$", // Match '/admin' and any nested paths
  ],
};