import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '../../../components/card/Card'
import '../../../assets/style/race.css'

export default function PastRace() {
    return (
        <div className="wrap-race">
            <Grid container
                spacing={1}
                direction="coloumn"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    )
}
