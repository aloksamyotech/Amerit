import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginAuth() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div style={{ color: 'lightblue', marginRight: '10px' }}>
          <h3>Welcome {session?.user?.name}</h3>
        </div>

        <div onClick={() => signOut()} style={{ cursor: 'pointer' }}>
          <h3>Sign out</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <div onClick={() => signIn('azure-ad-b2c')}>
        <h5>Sign in</h5>
      </div>
    </>
  );
}
