import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const PUBLIC_URLS = ['/login', '/register', '/activation', '/confirmation'];

/**
 * Add the responsibility of redirects to the middleware and not to the login page
 **/
export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    /**
     * Redirect to main page if token is provided and pathname belongs to login page
     **/
    if (req.nextUrl.pathname === '/login' && req.nextauth.token) {
      const url = req.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      /**
       * Authorize login page if not token provided
       * Authorize any page if token provided
       **/
      authorized: ({ req, token }) => (PUBLIC_URLS.includes(req.nextUrl.pathname) && !token) || !!token
    }
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|static|favicon.svg).*)'
  ]
};
