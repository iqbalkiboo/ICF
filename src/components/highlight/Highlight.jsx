import React from 'react'
import { useTranslation } from "react-i18next";
import { Grid } from '@mui/material'
import '../../assets/style/highlight.css'
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';

export default function Highlight(props) {
    const { t } = useTranslation();
    const data = props.props
    return (
        <div className="highlight">
            {data.length !== 0 ? 
                <Carousel autoPlay infiniteLoop={true} showThumbs={false} showArrows={false}>
                    {data?.map((items, index) => (
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={index}>
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
                        </Grid>
                    ))}
                </Carousel>
                : 
                <span className="dataNotFound">{t("No Up Coming Race")}</span>
            }
        </div>
    )
}