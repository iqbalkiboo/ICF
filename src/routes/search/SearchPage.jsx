import React from 'react'
import '../../assets/style/search.css'
import Grid from '@mui/material/Grid'
import { Link, useLocation } from 'react-router-dom'

import imageWomanBike from '../../assets/image/woman.png'
import imageBikes from '../../assets/image/bikes.png'
import imageTrend from '../../assets/image/trend-bike.png'
import PastRace from '../race/components/PastRace'

export default function SearchPage() {
    const location = useLocation();
    const values = location.search
    console.log(values)
    return (
        <div className="main-style">
            <div className="sub-labels">
                Search Result for :
            </div>
            {/* <span className="labels">{location.state.params}</span> */}
            <div className="sub-categ">
                <span className="labels">News</span>
                <div className="list-news-event">
                    <Grid container
                        spacing={1}
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                            {newsEvent.map((item) => (
                                <Grid item xs={4}>
                                    <div key={item.label} className="content-list">
                                        <img src={item.imagePath} alt="event-bike" style={{width: "100%"}}/>
                                        <div className="event">
                                            <span className="label-event">{item.label}</span>
                                            <p className="desc-event">{item.desc}</p>
                                            <div className="footlabel">
                                                <Link to="/news">
                                                    Read More
                                                </Link>
                                                <span>
                                                    21 MAR 2022
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                    </Grid>
                </div>
            </div>
            <div className="sub-categ">
                <span className="labels">ICF CHAMPIONSHIP</span>
                <div className="search-race">
                    <PastRace />
                </div>
            </div>
        </div>
    )
}


const newsEvent = [
    {
        label: 'Women On Bikes',
        imagePath: imageWomanBike,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Mountain Side Track - Ngawi',
        imagePath: imageBikes,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Bike Commuting Trends 2022',
        imagePath: imageTrend,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    }
]