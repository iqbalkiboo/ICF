import React from 'react'
import { useTranslation } from "react-i18next";
import { Grid } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import API from '../../../../service/API/index.js';
import newsListParams from '../../../../service/URL/news/newsListParams.js';

import { Link } from 'react-router-dom';
import moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis'

export default function AllPages(props) {
    const data = props.props.props
    const { t } = useTranslation();
    const [pagination, setPagination] = React.useState(1);
    const [dataNews, setDataNews] = React.useState([])
    const [latestNews, setLatestNews] = React.useState({})
    const [metadata, setMetadata] = React.useState({});
    const newsParams = newsListParams.getUrlNewsList
    
    
    React.useEffect(() => {

        const fetchNews = (newsParams) => {
            newsParams.pagination = `pagination[page]=${pagination}&`
            try {
                if (data === 'ALL') {
                    return API.GET_NEWS(
                        '?' 
                        + newsParams.pagination 
                        + newsParams.paginationSize 
                        + newsParams.sort 
                        + newsParams.populate
                    ).then((res) => {
                        setMetadata(res?.data?.meta)
    
                        if(pagination === 1){ 
                            const filteredLatestNewsData = res?.data?.data.filter(news => news?.attributes?.hot_news)
                            if(filteredLatestNewsData.length > 0 ) { 
                                const indexHotnews = res?.data?.data.indexOf(filteredLatestNewsData[0])
                                setLatestNews(filteredLatestNewsData[0])
                                const data = res?.data?.data
                                data.splice(indexHotnews, 1)
                                setDataNews(data)
        
                            } else { 
                                setLatestNews(res?.data?.data[0])
                                setDataNews(latestNews.slice(1))
                            }

                        } else { 
                            setDataNews(res?.data?.data)
                        }
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
                        setMetadata(res?.data?.meta)
    
                        if(pagination === 1){ 
                            const filteredLatestNewsData = res?.data?.data.filter(news => news?.attributes?.hot_news)
                            if(filteredLatestNewsData.length > 0 ) { 
                                const indexHotnews = res?.data?.data.indexOf(filteredLatestNewsData[0])
                                setLatestNews(filteredLatestNewsData[0])
                                const data = res?.data?.data
                                data.splice(indexHotnews, 1)
                                setDataNews(data)
        
                            } else { 
                                setLatestNews(res?.data?.data[0])
                                setDataNews(latestNews.slice(1))
                            }

                        } else { 
                            setDataNews(res?.data?.data)
                        }
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchNews(newsParams)
    }, [data, latestNews, newsParams, pagination])

    const onPaginationSizeChange = (event, value) => {
        setPagination(value);
        newsParams.getUrlNewsList.paginationSize = "pagination[pageSize]=12&";
      };

    return (
        <div>
            <div className="wrap-all-pages">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="wrap-desc">
                            <div className="labels-detail">LATEST NEWS</div>
                            <div className="wrap-desc-title">
                                <div className="chips-categ">
                                    <button className="flag-tag" disabled>{latestNews?.attributes?.category}</button> 
                                </div>
                                <div className="chips-categ">
                                    <button className="flag-tag" disabled>{latestNews?.attributes?.subcategory}</button> 
                                </div>
                                <div className="chips-categ">
                                    <span>{moment(latestNews?.attributes?.publishedAt).format('LL')}</span>
                                </div>
                            </div>
                            <div className="sub-title-card">
                                {latestNews?.attributes?.title}
                            </div>
                            <div className="desc-card">
                            <LinesEllipsis 
                                        className="desc-event"
                                        text={latestNews?.attributes?.description}
                                        maxLine='6'
                                        ellipsis='...'
                                        trimRight
                                        basedOn='letters'
                                    /> 
                            </div>
                            <Link to={`/news/${latestNews?.id}`}> <span className="readmore">Read More...</span> </Link>
                            
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="wrap-desc-image">
                            <img src={`${process.env.REACT_APP_BE_URL}` + latestNews?.attributes?.image?.data?.attributes?.url } alt={latestNews?.attributes?.name}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="list-news-event">
                {dataNews?.length === 0 ? (
                    <span className="dataNotFound">{t("Data Tidak Ditemukan")}</span>
                ) : (
                    <div>

                    {/* SECTION 1 */}
                    <div className="main-news-list">
                        {dataNews?.slice(0,3).map((item, index) => (
                            <div key={index} className="content-list">
                                <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url } alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                                <div className="event-news">
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
                        ))}
                    </div>

                    {/* SECTION 2 */}
                    <div className="main-news-list">
                        {dataNews?.slice(3,6).map((item, index) => (
                            <div key={index} className="content-list">
                                <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url } alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                                <div className="event-news">
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
                        ))}
                    </div>

                    {/* SECTION 3 */}
                    <div className="main-news-list">
                        {dataNews?.slice(6,9).map((item, index) => (
                            <div key={index} className="content-list">
                                <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url } alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                                <div className="event-news">
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
                        ))}
                    </div>

                    {/* SECTION 4 */}
                    <div className="main-news-list">
                        {dataNews?.slice(9,12).map((item, index) => (
                            <div key={index} className="content-list">
                                <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url } alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                                <div className="event-news">
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
                        ))}
                    </div>
                    </div>
                    
                ) }
            </div>
            <Stack spacing={2}>
                    <Pagination
                        onChange={onPaginationSizeChange}
                        count={metadata?.pagination?.pageCount}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...item}
                            />
                        )}
                    />
                </Stack>
        </div>
    )
}
