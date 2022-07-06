import React from 'react'
import { Grid } from '@mui/material'
import '../../assets/style/highlight.css'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function Highlight(props) {
    const data = props?.props
    return (
        <div className="highlight">
            {data.map((item, index) => {
                <Grid key={index} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        Race Hub
                    </Grid>
                    <Grid item xs={1}>
                        {/* {item?.tgl_dibuka} */}
                    </Grid>
                    <Grid item xs={6}>
                        <span className="captions">
                            {item?.nama_event}
                        </span>
                    </Grid>
                    <Grid item xs={2}>
                        <KeyboardArrowLeft />
                        <KeyboardArrowRight />
                    </Grid>
                </Grid>
            })}
        </div>
    )
}