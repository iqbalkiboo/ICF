import React from 'react'
import { Grid } from '@mui/material'
import '../../assets/style/highlight.css'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function Highlight() {
    return (
        <div className="highlight">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    Race Hub
                </Grid>
                <Grid item xs={1}>
                    21 Jan
                </Grid>
                <Grid item xs={6}>
                    <span className="captions">
                        ICF Championship 2022
                    </span>
                </Grid>
                <Grid item xs={2}>
                    <KeyboardArrowLeft />
                    <KeyboardArrowRight />
                </Grid>
            </Grid>
        </div>
    )
}
