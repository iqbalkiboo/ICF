import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function DetailRace() {
    return (
        <div>
            <div className="hero-image">
                <div className="wrap-race-detail">      
                    <div className="sub-title-race">
                        <span>ICF BMX NATIONAL CHAMPIONSHIP 2022</span>
                    </div>
                    <div className="main-content-race">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <div className="card-race-detail">
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <div style={{textAlign: "center", padding: "0 12px"}}>
                                                <div>UP NEXT</div>
                                                <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>17</div>
                                                <div style={{fontSize: "12px", padding: "2px 0"}}>AUGUST</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography>INDONESIA INDEPENDENT DAYS WORLD CHAMPIONSHIP</Typography>
                                            <div className="chips">
                                                <span>Off Road</span>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className="detail-content">
                <span className="labels">
                    OVERVIEW
                </span>
                <div className="overview">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <span className="title">
                                WELCOME TO  PULOMAS: INTERNATIONAL BMX CIRCUIT EAST JAKARTA
                            </span>
                        </Grid>
                        <Grid item xs={8}>test</Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
