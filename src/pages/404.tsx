import { Button, Link } from '@mui/material'
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>Amerits : 404</title>
                <meta name="description" content="404 Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ textAlign: 'center' }}>
                <h1>404!!!</h1>
                <h2>Not Found</h2>.
                <Link href="/">
                    <Button variant="contained">Go Home</Button>
                </Link>
            </div>
        </>
    )
}
