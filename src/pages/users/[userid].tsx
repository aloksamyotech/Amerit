import * as React from 'react';

import { Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import UserTemplate from '@components/userTemplate';
import Layout from '@components/layout';

export default function UserPost() {
  const router = useRouter();
  const userId = router.query.userid;

  const { data, error } = useSWR(userId, fetcher);

  if (error) return 'An error has occured.';
  if (!data) return <Typography variant='h1'>Loading...</Typography>;

  return (
    <Layout>
      <Head>
        <title>Amerits : User</title>
        <meta name='description' content='User Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <UserTemplate userRec={data}></UserTemplate>
      </div>
    </Layout>
  );
}

const fetcher = async (userId: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();

  return data;
};

// export async function getServerSideProps(context: any) {
//   const { params } = context;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.userid}`
//   );
//   const data = await response.json();

//   return {
//     props: {
//       user: data,
//     },
//   };
// }
