import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '../../../components/card/Card'
import '../../../assets/style/race.css'

export default function PastRace(props) {
    return (
        <div className="wrap-race">
            <Grid container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
            >
               {props?.props.map((item, index) => (
                    <Grid item xs={4} key={index}>
                    <Card item={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
