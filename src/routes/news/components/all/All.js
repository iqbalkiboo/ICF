import React from 'react'
import { useTranslation } from "react-i18next";
import { Grid } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import BikeImage from '../../../../assets/image/bikes.png'

import API from '../../../../service/API/index.js';
import newsListParams from '../../../../service/URL/news/newsListParams.js';

import { Link } from 'react-router-dom';
import moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis'

export default function AllPages(props) {
    const data = props.props
    const { t } = useTranslation();
    const [dataNews, setDataNews] = React.useState([])
    
    const fetchNews = (newsParams) => {
        try {
            if (data === 'ALL') {
                return API.GET_NEWS(
                    '?' 
                    + newsParams.pagination 
                    + newsParams.paginationSize 
                    + newsParams.sort 
                    + newsParams.populate
                ).then((res) => {
                    setDataNews(res?.data?.data)
                })
            } else {
                return API.GET_NEWS(
                    '?' 
                    + newsParams.pagination 
                    + newsParams.paginationSize 
                    + newsParams.sort 
                    + newsParams.populate
                    + `&filters[category][$eq]=${data}`
                ).then((res) => {
                    setDataNews(res?.data?.data)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    React.useEffect(() => {
        const newsParams = newsListParams.getUrlNewsList
        fetchNews(newsParams)
    },[])

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
                {dataNews.length === 0 ? (
                    <span className="dataNotFound">{t("Data Tidak Ditemukan")}</span>
                ) : (
                    <div>
                        <Grid container
                            spacing={1}
                            direction="coloumn"
                            alignItems="center"
                            justify="center"
                        >
                                {dataNews.map((item) => (
                                    <Grid item xs={4}>
                                        <div key={item.index} className="content-list">
                                            <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url } alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                                            <div className="event">
                                                <span className="label-event">{item?.attributes?.title}</span>
                                                <LinesEllipsis 
                                                    className="desc-event"
                                                    text={item?.attributes?.description}
                                                    maxLine='1'
                                                    ellipsis='...'
                                                    trimRight
                                                    basedOn='letters'
                                                />
                                                <div className="footlabel">
                                                    <Link to={`/news/${item?.id}`}> <span>Read More...</span> </Link>
                                                    <span>
                                                        {moment(item?.attributes?.publishedAt).format('LL')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                        </Grid> 
                    </div>
                ) }
                <Stack spacing={2}>
                    <Pagination
                        count={dataNews.length}
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
