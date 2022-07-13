import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { Link, useNavigate } from 'react-router-dom'

import '../../assets/style/homepages.css'

import GalleryPages from './components/gallery';
import CarouselPages from '../../components/carrousel/Carousel'
import Highlight from '../../components/highlight/Highlight';

import { useTranslation } from "react-i18next";
import LinesEllipsis from 'react-lines-ellipsis';
import moment from 'moment';
import axios from 'axios';
import API from '../../service/API';

import highlightParams from '../../service/URL/home/highlightParams'
import galleryParams from '../../service/URL/home/galleryParams'
import newsEventParams from '../../service/URL/home/newsEventParams'
import upComingParams from '../../service/URL/home/upComingParams'

import imageRoad from '../../assets/image/road.svg'
import imageOffRoad from '../../assets/image/offroad.svg'
import imageTrack from '../../assets/image/track.svg'
import partner1 from '../../assets/image/partners/image1.svg'
import partner2 from '../../assets/image/partners/image2.svg'
import partner3 from '../../assets/image/partners/image3.svg'
import partner4 from '../../assets/image/partners/image4.svg'
import imageAbout1 from '../../assets/image/about/about1.png'
import imageAbout2 from '../../assets/image/about/about2.png'
import imageAbout3 from '../../assets/image/about/about3.png'

const images = [
    {
        label: 'ROAD',
        imagePath: imageRoad
    },
    {
        label: 'OFF ROAD',
        imagePath: imageOffRoad
    },
    {
        label: 'TRACK',
        imagePath: imageTrack
    }
]

const partnerList = [
    {
        label: 'UCI',
        imagePartner: partner1
    },
    {
        label: 'KEMENPORA',
        imagePartner: partner2
    },
    {
        label: 'OLIMPIADE',
        imagePartner: partner3
    },
    {
        label: 'POLRI',
        imagePartner: partner4
    }
]

const itemData = [
    {
        img: imageAbout1,
        title: 'story',
        rows: 3,
        cols: 2,
    },
    {
        img: imageAbout2,
        title: 'rodeBike',
        cols: 2,
        rows: 2
    },
    {
        img: imageAbout3,
        title: 'pranko',
        cols: 2,
    }
];

function Homepages() {
    const [dataHightLight, setDataHightLight] = React.useState([]);
    const [dataGallery, setDataGallery] = React.useState([]);
    const [dataNewsItem, setDataNewsItem] = React.useState([]);
    const [dataUpComingRace, setDataUpcomingRace] = React.useState([]);
    const { t } = useTranslation();

    let navigate = useNavigate();

    const handleClick = (event) => {
        console.log(event.target.textContent)
        event.preventDefault();
        navigate("/search", { 
            replace: true, 
            state: {
                params: event.target.textContent,
            }
        });
    };

    const fetchUpComingRace = () => {
        try {
            return axios(`${process.env.REACT_APP_BE_URL_MEMBER}` + upComingParams.getUpcomingParams)
            .then((res) => {
                setDataUpcomingRace(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchHighLight = (highlight) => {
        try {
            return API.GET_HIGHLIGHT('?' + highlight.pagination + highlight.paginationSize + highlight.sort + highlight.populate)
            .then((res) => {
                setDataHightLight(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchGallery = (gallery) => {
        try {
            return API.GET_GALLERY_HOME('?' + gallery.pagination + gallery.paginationSize + gallery.sort + gallery.populate)
            .then((res) => {
                setDataGallery(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchNewsEvent = (newsEvent) => {
        try {
            return API.GET_NEWS_ITEM('?' + newsEvent.pagination + newsEvent.paginationSize + newsEvent.sort + newsEvent.populate)
            .then((res) => {
                setDataNewsItem(res.data.data)
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        const highlight = highlightParams.getUrlHomeHighlight
        const gallery = galleryParams.getUrlGallery
        const newsEvent = newsEventParams.getUrlNewsEvent
        fetchUpComingRace()
        fetchHighLight(highlight)
        fetchGallery(gallery)
        fetchNewsEvent(newsEvent)
    },[])
    return (
        <div className="sections" data-testid="home-page">
            <Highlight props={dataUpComingRace}/>
            <CarouselPages props={dataHightLight}/>
            <div className="disciplines">
                <div className="labels">{t("disciplines")}</div>
                <div className="list-disciplines" onClick={(event) => handleClick(event)}>
                    {images.map((item, index) => (
                        <div className="container-list" key={index}>
                            <img src={item.imagePath} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">
                                    {item.label}
                                    <hr className="dividers" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="homepages-news">
                <div className="labels">
                    {t("news, event, and insight")}
                    <Link to="/news">
                        <span style={{fontSize: "16px", marginRight: "80px", color: "#fff", textDecoration: "none"}}>{t("Read More")}</span>
                    </Link>
                </div>
                {/* SECTION 1 */}
                <div className="list-news-event">
                    {dataNewsItem?.slice(0,3).map((item, index) => (
                        <div key={index} className="content-list">
                            <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url} alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                            <div className="chips">
                                <div className="chips-category">
                                    <button className="flag-tag" disabled>{item?.attributes?.category}</button> 
                                </div>
                                <div className="chips-subcategory">
                                    <button className="flag-tag" disabled>{item?.attributes?.subcategory}</button> 
                                </div>
                            </div>
                            <div className="event">
                                <span className="label-event">{item?.attributes?.title}</span>
                                <LinesEllipsis
                                    className="desc-event"
                                    text={item?.attributes?.description}
                                    maxLine='2'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />
                                <div className="footlabel">
                                    <Link to={`/news/${item?.id}`}> <span>{t("Read More")}...</span> </Link>
                                    <span>
                                        {moment(item?.attributes?.publishedAt).format('LL')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SECTION 2 */}
                <div className="list-news-event">
                    {dataNewsItem?.slice(3,6).map((item, index) => (
                        <div key={index} className="content-list">
                            <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url} alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                            <div className="chips">
                                <div className="chips-category">
                                    <button className="flag-tag" disabled>{item?.attributes?.category}</button> 
                                </div>
                                <div className="chips-subcategory">
                                    <button className="flag-tag" disabled>{item?.attributes?.subcategory}</button> 
                                </div>
                            </div>
                            <div className="event">
                                <span className="label-event">{item?.attributes?.title}</span>
                                <LinesEllipsis
                                    className="desc-event"
                                    text={item?.attributes?.description}
                                    maxLine='2'
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters'
                                />
                                <div className="footlabel">
                                    <Link to={`/news/${item?.id}`}> <span>{t("Read More")}...</span> </Link>
                                    <span>
                                        {moment(item?.attributes?.publishedAt).format('LL')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", padding:"30px 0"}}>
                    <Link to="/news">
                        <button className="learn-more-btn">{t("Learn More")}</button>
                    </Link>
                </div>
            </div>
            <div className="homepages">
                <div className="labels">
                    {t("Gallery")}
                    <Link to="/gallery">
                        <span style={{fontSize: "16px", marginRight: "80px", color: "#fff", textDecoration: "none"}}>{t("View Gallery")}</span>
                    </Link>
                </div>
                <div className="gallery">
                    <GalleryPages dataGallery={dataGallery}/>
                </div>
            </div>
            <div className="homepages">
                <div className="about-icf"> 
                    <div className="labels-gallery">{t("ABOUT ICF")}</div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <div className="image-grid">
                                <img className="image-grid-col-2 image-grid-row-3" src={itemData[0].img} alt="gallery-icf" />
                                {itemData?.map((item, index) => (
                                    <img key={index} src={item.img} alt="architecture"/>
                                ))}
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="sub-title-years">
                                <div className="years-about">19<b>59</b></div>
                                <div className="story-about">
                                    <p>
                                        The Indonesian Cycling Federation 
                                        or ISSI (in Indonesian: Ikatan Sepeda Sport Indonesia) 
                                        is the national governing body of cycle racing in Indonesia. 
                                    </p>
                                    <p>
                                        The ISSI is a member of the UCI and the ACC. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Morbi elementum eget dolor vel vulputate. In rhoncus tristique dolor,
                                        vitae venenatis metus tristique eget. Sed iaculis risus in porttitor porta. 
                                        Duis eget ligula lacus. Donec eros nunc, volutpat quis elit vel, tempor porttitor purus. 
                                        Maecenas quam ipsum, dapibus eu volutpat ac, venenatis nec metus. 
                                        Vestibulum egestas nulla porta orci finibus, quis elementum sapien tempus.
                                    </p>
                                    <p>
                                        In tempus lobortis porta. 
                                        Phasellus blandit, est sit amet cursus porttitor, 
                                        massa felis tempus risus, eget sagittis dolor mauris ut arcu. 
                                        In at facilisis dolor, in scelerisque odio. Morbi tincidunt a mi et rhoncus. 
                                        Integer at euismod lacus. Mauris quam urna, lobortis sed mauris ut, 
                                        facilisis efficitur nibh. Integer tristique nibh vel est pharetra, 
                                        sit amet malesuada felis vehicula. Phasellus condimentum nulla in mattis gravida. 
                                        Sed auctor massa tempor pharetra luctus. Suspendisse efficitur magna in est finibus aliquam. 
                                        Donec ac pellentesque nunc.
                                    </p>
                                    <div style={{ textAlign: "center", marginTop: "40px"}}>
                                        <Link to="/about">
                                            <button className="learn-more-btn">{t("Learn More")}</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="partners">
                        <span className="labels-gallery">{t("ICF PARTNERS")}</span>
                        <div className="partner-list">
                            
                                    {partnerList.map((item, index) => (
                                        
                                            <div className="content-list" key={index}>
                                                <img src={item.imagePartner} alt={item.label} style={{width: "64%"}}/>
                                            </div>
                                        
                                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepages
