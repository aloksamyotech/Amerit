import Head from 'next/head';
import AdminProfileDashboard from '@components/admin-profile';

export default function AdminProfile() {
  return (
    <>
      <Head>
        <title>Amerit Vendor Portal- Admin</title>
        <meta name='description' content='Amerit Vendor Portal' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AdminProfileDashboard />
    </>
  );
}
