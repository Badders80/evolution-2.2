// import { withAuth } from '@auth0/nextjs-auth0/edge';

/**
 * Middleware to protect the My Stables route using Auth0.
 */
// export default withAuth({
//   pages: {
//     signIn: '/api/auth/login',
//   },
// });

// Temporary: no auth
export default function middleware() {
  // No auth for now
}

export const config = {
  matcher: ['/my-stables/:path*'],
};