import React from 'react'
import { Grid } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BikeImage from '../../../../assets/image/bikes.png'
import imageWomanBike from '../../../../assets/image/woman.png'
import imageBikes from '../../../../assets/image/bikes.png'
import imageTrend from '../../../../assets/image/trend-bike.png'
import { Link } from 'react-router-dom';

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
    },
    {
        label: 'Women On Bikes',
        imagePath: imageTrend,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Mountain Side Track - Ngawi',
        imagePath: imageBikes,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Bike Commuting Trends 2022',
        imagePath: imageWomanBike,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    }
]

export default function AllPages() {
    return (
        <div>
            <div className="wrap-all-pages">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="wrap-desc">
                            <div className="labels-detail">LATEST NEWS</div>
                            <div className="wrap-desc-title">
                                <div className="chips-categ">
                                    <button className="flag-tag" disabled>NEWS</button> 
                                </div>
                                <div className="chips-categ">
                                    <button className="flag-tag" disabled>ICF</button> 
                                </div>
                                <div className="chips-categ">
                                    <span>11 January 2022</span>
                                </div>
                            </div>
                            <div className="sub-title-card">
                                Bike Commuting Trends 2022
                            </div>
                            <div className="desc-card">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate. 
                            </div>
                            <Link to="/news/:id"> <span className="readmore">Read More...</span> </Link>
                            
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="wrap-desc-image">
                            <img src={BikeImage} alt='bike'/>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="list-news-event">
                <Grid container
                    spacing={1}
                    direction="coloumn"
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
                                            <span>
                                                Read More
                                            </span>
                                            <span>
                                                21 MAR 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                </Grid>
                <Stack spacing={2}>
                    <Pagination
                        count={10}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            </div>
        </div>
    )
}
