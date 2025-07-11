import React from 'react'
import { useTranslation } from "react-i18next";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import API from '../../../../service/API/index.js';
import newsListParams from '../../../../service/URL/news/newsListParams.js';

import imageDefault from '../../../../assets/image/default-imagess.png'

import { Link } from 'react-router-dom';
import moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis'

export default function AllPages(props) {
    const data = props.props
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
                const filterCategory = data === 'ALL' ? '' : `&filters[category][$eq]=${data}`

                return API.GET_NEWS(
                    '?' 
                    + newsParams.pagination 
                    + newsParams.paginationSize 
                    + newsParams.sort 
                    + newsParams.populate
                    + filterCategory
                ).then((res) => {
                    setMetadata(res?.data?.meta)

                    if(pagination === 1 && res?.data?.data.length > 0){ 
                        const filteredLatestNewsData = res?.data?.data.filter(news => news?.attributes?.hot_news)
                        if(filteredLatestNewsData.length > 0 ) { 
                            const indexHotnews = res?.data?.data.indexOf(filteredLatestNewsData[0])
                            setLatestNews(filteredLatestNewsData[0])
                            const data = res?.data?.data
                            data.splice(indexHotnews, 1)
                            setDataNews(data)
    
                        } else { 
                            setLatestNews(res?.data?.data[0])
                            setDataNews(res?.data?.data.slice(1))
                        }

                    } else { 
                        setDataNews(res?.data?.data)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchNews(newsParams)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagination])

    const onPaginationSizeChange = (event, value) => {
        setPagination(value);
        newsParams.paginationSize = "pagination[pageSize]=12&";
    };


    return (
        <div className="content-news">
            <div className="wrap-all-pages">
                <div className="wrap-desc">
                    <div className="labels-detail">{t('LATEST NEWS')}</div>
                    <div className="wrap-desc-title">
                        {latestNews?.attributes?.category && 
                            <div className="chips-categ">
                                <button className="flag-tag" disabled>{latestNews?.attributes?.category ?? ''}</button> 
                            </div>
                        }
                        {latestNews?.attributes?.subcategory && 
                            <div className="chips-categ">
                                <button className="flag-tag" disabled>{latestNews?.attributes?.subcategory ?? ''}</button> 
                            </div>
                        }
                        {latestNews?.attributes?.publishedAt && 
                            <div className="chips-categ">
                                <span>{moment(latestNews?.attributes?.publishedAt).format('DD MMMM YYYY')}</span>
                            </div>
                        }
                    </div>
                    <div className="sub-title-card">
                        {latestNews?.attributes?.title}
                    </div>
                    <div className="desc-card">
                        <LinesEllipsis 
                            className="desc-event"
                            text={latestNews?.attributes?.blog_summary ?? ""}
                            maxLine='6'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        /> 
                    </div>
                    
                        <Link to={`/news/${latestNews?.attributes?.slug}`}> 
                            {latestNews.id && 
                                <div className="readmore">Read More...</div>
                            }
                        </Link>
                </div>
                <div className="wrap-desc-image">
                    <img src={latestNews?.attributes?.image?.data?.attributes?.url ? ( `${process.env.REACT_APP_BE_URL}` + latestNews?.attributes?.image?.data?.attributes?.url ) : imageDefault } alt={latestNews?.attributes?.name}/>
                </div>
            </div>
            <div className="list-news-menu">
                {dataNews?.map((item, index) => (
                    <div key={index} className="content-list">
                        <Link to={`/news/${item?.attributes?.slug}`}>
                            <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url } alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                        </Link>
                        <div className="chips">
                            <div className="chips-category">
                                <button className="flag-tag" disabled>{item?.attributes?.category}</button> 
                            </div>
                            <div className="chips-subcategory">
                                <button className="flag-tag" disabled>{item?.attributes?.subcategory}</button> 
                            </div>
                        </div>
                        <div className="event-news">
                            <span className="label-event">{item?.attributes?.title}</span>
                            <LinesEllipsis 
                                className="desc-event"
                                text={item?.attributes?.blog_summary ?? ""}
                                maxLine='1'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />
                            <div className="footlabel">
                                <Link to={`/news/${item?.attributes?.slug}`}> <span>{t("Read More")}...</span> </Link>
                                <span>
                                    {moment(item?.attributes?.publishedAt).format('DD MMMM YYYY')}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="paginations-wrp">
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
        </div>
    )
}
