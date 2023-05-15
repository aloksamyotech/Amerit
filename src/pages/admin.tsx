import Head from 'next/head'

export default function Admin() {
    return (
        <>
            <Head>
                <title>Amerits : Admin</title>
                <meta name="description" content="Admin Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Only admins can see this page
        </>
    )
}
