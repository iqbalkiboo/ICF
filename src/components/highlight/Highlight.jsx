import React from 'react'
import { Grid } from '@mui/material'
import '../../assets/style/highlight.css'
import { Carousel } from 'react-responsive-carousel';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import moment from 'moment';

export default function Highlight(props) {
    const data = props.props
    return (
        <div className="highlight">
            <Carousel autoPlay infiniteLoop={true} showThumbs={false} showArrows={true}>
                {data.map(items => (
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            Race Hub
                        </Grid>
                        <Grid item xs={1}>
                            {moment(items?.tgl_ditutup).format('LL')}
                        </Grid>
                        <Grid item xs={6}>
                            <span className="captions">
                                {items?.nama_event}
                            </span>
                        </Grid>
                        <Grid item xs={2}>
                            {/* <KeyboardArrowLeft />
                            <KeyboardArrowRight /> */}
                        </Grid>
                    </Grid>
                ))}
            </Carousel>
        </div>
    )
}