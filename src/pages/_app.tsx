import type { AppProps } from 'next/app';
import '@core/theme/icons';
import '@styles/globals.css';
import Providers from '@core/providers';
import Layout from '@components/layout';
import './app.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <Providers session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
