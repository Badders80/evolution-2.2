import { withAuth } from "@auth0/nextjs-auth0/edge";

/**
 * Middleware to protect the My Stables route using Auth0.
 */
export default withAuth({
  pages: {
    signIn: "/api/auth/login",
  },
});

export const config = {
  matcher: ["/my-stables/:path*"],
};
