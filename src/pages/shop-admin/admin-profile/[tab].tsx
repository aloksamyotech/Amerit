import React from 'react';
import Head from 'next/head';
import AdminProfileDashboard from '@components/admin-profile';
import { useRouter } from 'next/router';

export default function AdminProfile() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>Amerit Vendor Portal- Admin</title>
        <meta name='description' content='Amerit Vendor Portal' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AdminProfileDashboard path={String(router?.query?.tab)} />
    </React.Fragment>
  );
}
