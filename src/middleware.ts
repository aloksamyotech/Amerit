import { withAuth } from 'next-auth/middleware';
import jwtDecode from 'jwt-decode';
import {
  VENDOR_ADMIN,
  VENDOR_ADMIN_APPROVED,
  VENDOR_OWNER
} from 'src/constants';

interface AccessTokenDetails {
  sub: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  extension_role?: string;
  extension_Company?: string;
  emails?: string[];
}

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === '/admin') {
        const access_token = token?.accessToken;
        if (!access_token) {
          return false;
        }
        const decode_json: AccessTokenDetails = jwtDecode(
          access_token as string
        );

        //TODO: Finalise the allowed roles.
        const role = decode_json?.extension_role;
        if (
          role?.includes(VENDOR_ADMIN_APPROVED) ||
          role?.includes(VENDOR_ADMIN) ||
          role?.includes(VENDOR_OWNER)
        ) {
          return true;
        } else {
          return false;
        }
      }

      // `/about` only requires the user to be logged in

      return !!token;
    }
  }
});

export const config = { matcher: ['/admin', '/about'] };
