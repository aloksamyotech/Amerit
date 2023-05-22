import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.push('/shop-admin/admin-profile');
  }, []);

  return (
    <>
      <Head>
        <title>Amerits : Admin</title>
        <meta name='description' content='Admin Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Only admins can see this page
    </>
  );
}
