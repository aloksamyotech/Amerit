import { useSession } from 'next-auth/react';
import Authenticated from './Authenticated';
import NotAuthenticated from './NotAuthenticated';

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Authenticated session={session} />
    );
  }

  return (
    <NotAuthenticated />
  );
}
