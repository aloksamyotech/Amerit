import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Profile {
    id: string;
    extension_role: string;
  }

  interface Session {
    accessToken: unknown;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    roles: string;
  }
}
