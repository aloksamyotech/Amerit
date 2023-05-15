import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import HomeComponent from '@components/home';

const Home = () => <HomeComponent />;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  const session = await getSession({ req });
  const token = session?.accessToken ? session?.accessToken : null;

  return {
    props: { token }
  };
}

export default Home;
