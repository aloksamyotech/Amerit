import Layout from '@components/layout'
import Head from 'next/head'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Amerits : About</title>
                <meta name="description" content="About Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Hi About
        </Layout>
    )
}
