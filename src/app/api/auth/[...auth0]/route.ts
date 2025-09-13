import { handleAuth } from '@auth0/nextjs-auth0';

/**
 * Auth0 route handler.  
 * This delegates handling of the Auth0 authentication callbacks and API
 * endpoints to the library. Both GET and POST methods are supported.
 */
const handler = handleAuth();

export { handler as GET, handler as POST };