import React, { useEffect, useState } from 'react'
import '../../../assets/style/news.css'

import { Grid } from '@mui/material'

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

export default function DetailPages() {
    const { id } = useParams();
    // const navigate = useNavigate();
    const [dataDetail, setDataDetail] = useState("")
    const [dataRelated, setDataRelated] = useState([])

    const fetchDetailPages = (newsUrl) => {
        try {
            return API.GET_NEWS_DETAIL(id + newsUrl)
            .then((res) => {
                setDataDetail(res?.data?.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRelatedNews = (relatedUrl) => {
        try {
            return API.GET_NEWS_RELATED('?' + relatedUrl.pagination + relatedUrl.paginationSize + relatedUrl.sort + relatedUrl.populate)
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
        fetchRelatedNews(relatedUrl)
    },[])

    return (
        <>
            <div className="hero-image" style={{ backgroundImage: `url(${process.env.REACT_APP_BE_URL}${dataDetail?.attributes?.image?.data?.attributes?.url})`}}/>
            <div className="detail-content">
                <div className="details">
                    <div className="sub-title-card">
                        {dataDetail?.attributes?.title}
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={1}>
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
                                <span>share</span>
                            </div>
                        </Grid>
                        <Grid item xs={11}>
                            <div className="title-card-details">
                            {dataDetail?.attributes?.sub_title}
                            </div>
                            <div className="desc-card">
                                <div className="sub-heading-desc">
                                    <span className="dates">
                                        {moment(dataDetail?.attributes?.publishedAt).format('LL')}
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
                                {dataDetail?.attributes?.description}
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="details-card" style={{marginTop: '40px'}}>
                    <div className="label-related">Related News</div>
                    <div className="related-news">
                        {dataRelated.map((item,index) => (
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
            </div>
        </>
    )
}
