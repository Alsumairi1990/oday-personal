import { NextRequest, NextResponse } from "next/server";


import NextAuth from "next-auth/next";



export function middleware(req: NextRequest) {
  // Replace this with your actual authentication logic (e.g., checking JWT token)
  if (!isAuthenticated(req)) { // Replace with your authentication check
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next(); // Allow requests to proceed if authenticated
}

// Helper function to check authentication (replace with your implementation)
function isAuthenticated(req: NextRequest): boolean {
  // Implement your authentication logic here (e.g., check for a JWT token in cookies or session)
  // This is a placeholder, replace it with your actual logic
  return false; // Change this to return true if authenticated
}

export const config = {
  matcher: ["/"], // Apply middleware to all routes
};

export default NextAuth(config);
