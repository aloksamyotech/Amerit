import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Grid from '@mui/material/Grid'
import { Button, TextField } from '@mui/material'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { ...other } = props

    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

export default function UserTemplate({ userRec }: any) {
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {userRec.name[0]}
                        </Avatar>
                    }
                    title={userRec.name}
                    subheader={userRec.email}
                    action={
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button variant="contained" color="success">
                                    Update
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Button variant="contained" color="error">
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    }
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="outlined-basic"
                                label="User Name"
                                variant="outlined"
                                style={{ minWidth: '100%' }}
                                defaultValue={userRec.username}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="outlined-basic"
                                label="Phone"
                                variant="outlined"
                                style={{ minWidth: '100%' }}
                                defaultValue={userRec.phone}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-basic"
                                label="Website"
                                variant="outlined"
                                style={{ minWidth: '100%' }}
                                defaultValue={userRec.website}
                            />
                        </Grid>
                        {/* -------------- */}
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-basic"
                                label="Company Name"
                                variant="outlined"
                                style={{ minWidth: '100%' }}
                                defaultValue={userRec.company.name}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-basic"
                                label="Company Catch Phrase"
                                variant="outlined"
                                style={{ minWidth: '100%' }}
                                defaultValue={userRec.company.catchPhrase}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-basic"
                                label="Company BS"
                                variant="outlined"
                                style={{ minWidth: '100%' }}
                                defaultValue={userRec.company.bs}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container spacing={2}>
                            {/* -------------- */}
                            <Grid item xs={12}>
                                <strong>Address</strong>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="outlined-basic"
                                    label="City"
                                    variant="outlined"
                                    style={{ minWidth: '100%' }}
                                    defaultValue={userRec.address.city}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="outlined-basic"
                                    label="Street"
                                    variant="outlined"
                                    style={{ minWidth: '100%' }}
                                    defaultValue={userRec.address.street}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="outlined-basic"
                                    label="Suite"
                                    variant="outlined"
                                    style={{ minWidth: '100%' }}
                                    defaultValue={userRec.address.suite}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="outlined-basic"
                                    label="Zipcode"
                                    variant="outlined"
                                    style={{ minWidth: '100%' }}
                                    defaultValue={userRec.address.zipcode}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}
