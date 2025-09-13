// import { handleAuth } from '@auth0/nextjs-auth0/edge';

/**
 * Auth0 route handler.  
 * This delegates handling of the Auth0 authentication callbacks and API
 * endpoints to the library. Both GET and POST methods are supported.
 */
// const handler = handleAuth();

// export { handler as GET, handler as POST };

// Temporary placeholder
export async function GET() {
  return new Response('Auth not implemented', { status: 501 });
}

export async function POST() {
  return new Response('Auth not implemented', { status: 501 });
}