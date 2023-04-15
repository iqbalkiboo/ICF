import React, { useEffect, useState } from 'react'
import '../../../assets/style/news.css'

import { useParams } from 'react-router'
import API from '../../../service/API'
import { Link } from 'react-router-dom';
import moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis'

import facebook from '../../../assets/icon/facebook-white.svg'
import twitter from '../../../assets/icon/twitter-white.svg'
import instagram from '../../../assets/icon/whatsApp-white.svg'

import newsDetailParams from '../../../service/URL/news/newsDetailParams'
import relatedNewsParams from '../../../service/URL/news/relatedNewsParams'
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import {Helmet} from "react-helmet";

export default function NewsDetail() {
    const { slug } = useParams();
    const { t } = useTranslation();
    // const navigate = useNavigate();
    const [dataDetail, setDataDetail] = useState({})
    const [dataRelated, setDataRelated] = useState([])

    const fetchDetailPages = (newsUrl) => {
        try {
            const filterSlug = `&filters[slug][$eq]=${slug}`
            return API.GET_NEWS_DETAIL(newsUrl+ filterSlug)
            .then((res) => {
                setDataDetail(res?.data?.data[0])
                return res.data.data[0]
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRelatedNews = (relatedUrl,category) => {
        try {
            const filterCategory = `&filters[category][$eq]=${category}`
            return API.GET_NEWS_RELATED('?' + relatedUrl.pagination + relatedUrl.paginationSize + relatedUrl.sort + relatedUrl.populate +  filterCategory)
            .then((res) => {
                setDataRelated(res.data.data)                
            })
        } catch (error) {
            console.log(error)
        }
    }

    const generateLinkShare = (title, provider) => { 
        let generatedUrl = "";
        switch (provider) {
            case "facebook":
                const facebookUrl = "https://www.facebook.com/sharer/sharer.php"
                generatedUrl = facebookUrl + `?u=${encodeURIComponent(window.location.href)}`
                break;
                

            case "twitter":
                const twitterUrl = "https://twitter.com/intent/tweet";
                generatedUrl = twitterUrl + `?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`
                
                break;
                
            case "whatsapp":
                const whatsappUrl = "whatsapp://send";
                const urlParamWhatsapp = `${title} \n ${window.location.href}`
                generatedUrl = whatsappUrl + `?text=${encodeURIComponent(urlParamWhatsapp)}`
                
                break;
        
            default:
                break;
        }
        return generatedUrl 
    }

    useEffect(() => {
        const newsUrl = newsDetailParams.getUrlNewsDetail
        const relatedUrl = relatedNewsParams.getRelatedNews


        fetchDetailPages(newsUrl)
        .then(newsDetail => { 
            fetchRelatedNews(relatedUrl, newsDetail?.attributes?.category)
        })
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[slug])

    return (
        <>
        <Helmet>
        <title>{dataDetail?.attributes?.title}</title>
        <meta property="og:image" content={`${process.env.REACT_APP_BE_URL}${dataDetail?.attributes?.image?.data?.attributes?.url}`} />
        <meta property="og:image:width" content="650"/>
        <meta property="og:image:height" content="366" />
        <link rel="shortcut icon" type="image/jpeg" href={`${process.env.REACT_APP_BE_URL}${dataDetail?.attributes?.image?.data?.attributes?.url}`} />
        <link rel="shortcut icon" sizes="192x192" href={`${process.env.REACT_APP_BE_URL}${dataDetail?.attributes?.image?.data?.attributes?.url}`} />
       <link rel="apple-touch-icon" href={`${process.env.REACT_APP_BE_URL}${dataDetail?.attributes?.image?.data?.attributes?.url}`} />

        </Helmet>

            <div className="hero-image" style={{ backgroundImage: `url(${process.env.REACT_APP_BE_URL}${dataDetail?.attributes?.image?.data?.attributes?.url})`}}/>
            <div className="detail-content">
                <div className="details">
                    <div className="sub-title-card">
                        {dataDetail?.attributes?.title}
                    </div>
                    <div className="wrap-detail-news">
                        <div className="card-share">
                            <a href={generateLinkShare("","facebook")} target="_blank" rel="noreferrer">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href={generateLinkShare(dataDetail?.attributes?.title,"twitter")} target="_blank" rel="noreferrer">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href={generateLinkShare(dataDetail?.attributes?.title,"whatsapp")} target="_blank" rel="noreferrer">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <span>{t("share")}</span>
                        </div>
                        <div className="desc-card">
                            <div className="title-card-details">
                                {dataDetail?.attributes?.sub_title}
                            </div>
                            <div className="sub-heading-desc">
                                <span className="dates">
                                    {moment(dataDetail?.attributes?.publishedAt).format('DD MMMM YYYY')}
                                </span>
                                <div style={{ display: "block", marginTop: "10px"}}>
                                    <span className="taggings">
                                        {dataDetail?.attributes?.category}
                                    </span>
                                    <span className="taggings">
                                        {dataDetail?.attributes?.subcategory}
                                    </span>
                                </div>
                            </div>
                            <ReactMarkdown children={dataDetail?.attributes?.description} transformImageUri={uri =>uri.startsWith("http") ? uri : `${process.env.REACT_APP_BE_URL}${uri}`} />
                        </div>
                    </div>
                    <div className="card-share-hide">
                        <div className="share-labels">{t("share")}</div>
                        <a href={generateLinkShare("","facebook")} target="_blank" rel="noreferrer">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href={generateLinkShare(dataDetail?.attributes?.title,"twitter")} target="_blank" rel="noreferrer">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href={generateLinkShare(dataDetail?.attributes?.title,"whatsapp")} target="_blank" rel="noreferrer">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
                <div className="details-card" style={{marginTop: '40px'}}>
                    <div className="label-related">{t("Related News")}</div>
                    <div className="related-news">
                        {dataRelated.map((item,index) => (
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
                </div>
            </div>
        </>
    )
}
