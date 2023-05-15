import HomeAuthentication from "@components/shop-admin/ShopAdmin";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amerit Vendor Portal</title>
        <meta name="description" content="Amerit Vendor Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomeAuthentication />
    </>
  );
}
