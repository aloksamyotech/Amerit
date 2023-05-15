import Head from 'next/head'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from 'next/link'
import useSWR from 'swr'
import { Button, Grid } from '@mui/material'

export default function UserList() {
    const { data, error } = useSWR([''], fetcher)
    if (error) return <h3 style={{ color: 'red' }}>An error has occured.</h3>
    if (!data) return <h1>Loading...</h1>

    return (
      <>
        <Head>
            <title>Amerits : Users</title>
            <meta name="description" content="Users Page" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <h1 style={{ color: 'purple' }}>List of Users</h1>
                </Grid>
                <Grid item xs={9} style={{ textAlign: 'right' }}>
                    <Button variant="contained">Add New User</Button>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: 'green' }}>
                                S.No
                            </TableCell>
                            <TableCell style={{ color: 'green' }}>
                                Name
                            </TableCell>
                            <TableCell style={{ color: 'green' }}>
                                User Name
                            </TableCell>
                            <TableCell style={{ color: 'green' }}>
                                Email
                            </TableCell>
                            <TableCell style={{ color: 'green' }}>
                                Website
                            </TableCell>
                            <TableCell
                                style={{ color: 'green' }}
                            ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((user: any) => (
                            <TableRow
                                key={user.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.website}</TableCell>
                                <TableCell>
                                    <Link
                                        href={`users/${user.id}`}
                                        passHref
                                        style={{ color: 'blue' }}
                                    >
                                        Details
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      </>
    )
}

const fetcher = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return data
}
