import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next(); // Continue request if authenticated
  },
  {
    pages: {
      signIn: "/login", // Redirect to sign-in if not authenticated
    },
  }
);

// Define protected routes
export const config = {
  matcher: ["/account/:path*"], // Only these require auth
};
