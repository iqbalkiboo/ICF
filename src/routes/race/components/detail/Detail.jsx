import React, { useEffect, useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import partner1 from '../../../../assets/image/partners/image1.svg'
import partner2 from '../../../../assets/image/partners/image2.svg'
import partner3 from '../../../../assets/image/partners/image3.svg'
import partner4 from '../../../../assets/image/partners/image4.svg'
import API from '../../../../service/API';
import raceParams from '../../../../service/URL/race/raceParams';
import { useParams } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import raceRoadmapParams from '../../../../service/URL/race/raceRoadmapParams';
import { saveAs } from "file-saver";
import imageDefault from '../../../../assets/image/images-banner-default.svg'
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselResponsive from './responsive/CarouselResponsive';

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

export default function DetailRace() {
    const paramRace = raceParams.getUrlRaceDetail
    const { t } = useTranslation();
    const { id } = useParams();
    const [data, setData] = useState({})
    const [detailRace, setDetailRace] = useState({})
    const [detailUpcomingRace, setDetailUpcomingRace] = useState({})
    const [detailRaceRoadmap, setDetailRaceRoadmp] = useState({})

    const fetchDetailRaceStrapi = () => {
        try {
            return API.GET_RACE_DETAIL('?' + paramRace.filter + `${process.env.REACT_APP_BE_URL_MEMBER_WEB}/race-management/all/${id}` + paramRace.populate)
            .then((res) => {
                setData(res?.data?.data[0].attributes)
            })

    
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRaceRoadmap = () => {
        try {
            return API.GET_RACE_ROADMAP('?' + raceRoadmapParams.filter + `${process.env.REACT_APP_BE_URL_MEMBER_WEB}/race-management/all/${id}` + raceRoadmapParams.populate)
            .then((res) => {
                setDetailRaceRoadmp(res?.data?.data[0].attributes)
            })

    
        } catch (error) {
            console.log(error)
        }
    }

    const fetchDetailRaceMember = () => { 
        try {
            return axios.get(`${process.env.REACT_APP_BE_URL_MEMBER}/races/${id}`)
            .then((res) => {
                setDetailRace(res?.data?.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUpcomingRaceMember = () => { 
        try {
            return axios.get(`${process.env.REACT_APP_BE_URL_MEMBER}/races/upcoming`)
            .then((res) => {
                setDetailUpcomingRace(res?.data?.data)
            })
        } catch (error) {
            console.log(error)
        }
    }


    const downloadFile = (e, path, url) => {
        e.preventDefault()
        let downloadUrl = ''
        switch (url) {
            case "member":
                downloadUrl = process.env.REACT_APP_BE_URL_MEMBER_WEB + "/images/race/" + path
                
                break;
            case "strapi":
                downloadUrl = process.env.REACT_APP_BE_URL + path
                break;
        
            default:
                break;
        }
        
        saveAs(downloadUrl)

      }

      const registerRace = (e, raceId) => { 
        e.preventDefault();
        window.location.href= `${process.env.REACT_APP_BE_URL_MEMBER_WEB}/race-management/all/${raceId}`;
    }

    useEffect(() => {
        fetchDetailRaceStrapi()
        fetchDetailRaceMember()
        fetchUpcomingRaceMember()
        fetchRaceRoadmap()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {/* head race detail */}
            {data.image?.data?.attributes?.url ? (
                <div className="hero-image" style={{ backgroundImage: `url(${process.env.REACT_APP_BE_URL}${data.image?.data?.attributes?.url})`}}>
                    <div className="wrap-race-detail">  
                        <div className="sub-title-race">
                            <span>{detailRace?.nama_event}</span>
                        </div>
                        {detailRace?.can_register_race && 
                            <div className="btn-race-detail">
                                <button onClick={(e) => registerRace(e, detailRace?.id)}>
                                    <span>{t("Register Race")}</span>
                                </button>
                            </div>
                        }
                        <div className="main-content-race-detail">
                            <div className="card-race-detail">
                                <div className="detail-timeline">
                                    <div>{t("UP NEXT")}</div>
                                    <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>{moment(detailUpcomingRace?.tgl_ditutup).format("DD")}</div>
                                    <div style={{fontSize: "12px", padding: "2px 0"}}>{moment(detailUpcomingRace?.tgl_ditutup).format("MMMM").toUpperCase()}</div>
                                </div>
                                <div className="wrap-content-card-race-detail">
                                    <span>
                                        { detailUpcomingRace?.nama_event }
                                    </span>
                                    <div className="chips-race">
                                        <span>{ detailUpcomingRace?.tipe_race }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="hero-image" style={{ backgroundImage: `url(${imageDefault})`}}>
                    <div className="wrap-race-detail">  
                        <div className="sub-title-race">
                            <span>{detailRace?.nama_event}</span>
                        </div>
                        {detailRace?.can_register_race && 
                            <div className="btn-race-detail">
                                <button onClick={(e) => registerRace(e, detailRace?.id)}>
                                    <span>{t("Register Race")}</span>
                                </button>
                            </div>
                        }
                        <div className="main-content-race-detail">
                            <div className="card-race-detail">
                                <div className="detail-timeline">
                                    <div>{t("UP NEXT")}</div>
                                    <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>{moment(detailUpcomingRace?.tgl_ditutup).format("DD")}</div>
                                    <div style={{fontSize: "12px", padding: "2px 0"}}>{moment(detailUpcomingRace?.tgl_ditutup).format("MMMM").toUpperCase()}</div>
                                </div>
                                <div className="wrap-content-card-race-detail">
                                    <span>
                                        { detailUpcomingRace?.nama_event }
                                    </span>
                                    <div className="chips-race">
                                        <span>{ detailUpcomingRace?.tipe_race }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* head race detail */}

            <div className="detail-content">
                <span className="labels">
                    OVERVIEW
                </span>
                <div className="overview">
                    {Object.entries(data).length === 0 ? (
                        <div className="while-null">
                            <span>{t("There is no video right now. Please hang on and get back to us soon!")}</span>
                        </div>
                    ) : (
                        <>
                            <span className="title">
                                {data?.overview_title}
                                <hr style={{
                                    backgroundColor: "#fff", 
                                    width: "10%", 
                                    border: "none", 
                                    height: "2px",
                                    maxWidth: "100px",
                                    margin: "16px 0px 0px 0px",
                                }}/>
                            </span>
                            <div className="sec-grid">
                                <iframe 
                                    width="560"
                                    height="315" 
                                    src={data?.video_url}
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="detail-content2">
                {(detailRace?.tgl_dibuka && detailRace?.tgl_ditutup ) && 
                    <div className="overview">
                        <span className="title2">
                            {moment(detailRace?.tgl_dibuka).format('DD MMMM YYYY') + " - " + moment(detailRace?.tgl_ditutup).format('DD MMMM YYYY') }
                            <hr style={{
                                backgroundColor: "#DC2028", 
                                width: "10%", 
                                border: "none", 
                                height: "2px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                        </span>
                        <div className="sec-grid-docs">
                            <span>
                                {detailRace?.keterangan}
                            </span>
                        </div>
                </div>
                }
                {detailRace?.berkas_pendukung && 
                    <div className="overview">
                        <span className="title2">
                            OFFICIAL DOCUMENTS
                            <hr style={{
                                backgroundColor: "#DC2028", 
                                width: "10%", 
                                border: "none", 
                                height: "2px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                        </span>
                        <div className="sec-grid-docs">
                            <div className="race-list-items">
                                <span className="txt-sec">{detailRace?.nama_event}: QUALIFICATION SYSTEM</span>
                                <div className="wrap-docs">
                                    <button onClick={(e) => downloadFile(e, detailRace?.berkas_pendukung, "member")} formTarget="_blank">
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </button>
                                </div>
                            </div>
                            <hr style={{color: "#fff"}}/>
                        </div>
                    </div>
                }
            </div>
            <div className="detail-content">
                <div className="overview">
                    <span className="title">
                        {data?.timeline_title}
                        <hr style={{
                            backgroundColor: "#fff", 
                            width: "10%", 
                            border: "none", 
                            height: "2px",
                            maxWidth: "100px",
                            margin: "16px 0px 0px 0px",
                        }}/>
                    
                    </span>
                    {Object.entries(data).length !== 0 ? (
                        <div className="sec-grid">
                            <Carousel autoPlay={data?.timeline7 ? true : false} infiniteLoop={true} showThumbs={false} showArrows={false}>
                            {/* row 1 */}
                                <div className="timeline-carousel">
                                    {data?.timeline_date1 && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline_date1).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline_date1).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                {data?.timeline1?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline2_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline2_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline2_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                {data?.timeline2?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                        {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline3_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline3_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline3_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                            {data?.timeline3?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                
                                {/* row 2 */}
                                    {data?.timeline4_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline4_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline4_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                {data?.timeline4 !== null ? (
                                                    <>
                                                        {data?.timeline4?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                            <li key={index}>
                                                            {timeline !== null ? timeline : <span>no timeline available</span>}
                                                            </li>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <li>
                                                        No Timeline Available
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline5_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline5_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline5_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                {data?.timeline5?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                        {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline6_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline6_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline6_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                            {data?.timeline6?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                </div>
                                <div className="timeline-carousel">
                                    {data?.timeline7_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline7_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline7_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                {data?.timeline7?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline8_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline8_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline8_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                {data?.timeline8?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                        {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline9_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline9_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline9_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                            {data?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline10_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline10_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline10_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                            {data?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline11_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline11_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline11_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                            {data?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {data?.timeline12_date && 
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                {moment(data?.timeline12_date).format('DD MMMM').toUpperCase()}
                                            </div>
                                            <span>{moment(data?.timeline12_date).format('dddd').toUpperCase()}</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                            {data?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                                    <li key={index}>
                                                    {timeline}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </Carousel>
                        </div>
                    ) : (
                        <div className="while-null">
                            <span>{t("There is no Timeline right now. Please hang on and get back to us soon!")}</span>
                        </div>
                    )}
                    <CarouselResponsive data={data}/>
                </div>
            </div>
            
            <div className="detail-content2">
                <div className="overview">
                    {Object.entries(data).length !== 0 ? (
                        <>
                            <span className="title2">
                                {detailRaceRoadmap?.title}
                                <hr style={{
                                    backgroundColor: "#DC2028", 
                                    width: "10%", 
                                    border: "none", 
                                    height: "2px",
                                    maxWidth: "100px",
                                    margin: "16px 0px 0px 0px",
                                }}/>
                            </span>
                            <div className="main-download-docs">
                                {detailRaceRoadmap?.file1_title &&
                                <div className="sec-grid-docs">
                                    <div className="race-list-items">
                                        <span className="txt-sec">{detailRaceRoadmap?.file1_title}</span>
                                        <div className="wrap-docs">
                                            <button onClick={(e) => downloadFile(e, detailRaceRoadmap?.file1.data?.attributes?.url, "strapi")} formTarget="_blank">
                                                <FileDownloadIcon sx={{ fontSize: 20 }} />
                                            </button>
                                        </div>
                                    </div>
                                    <hr style={{color: "#fff"}}/>
                                </div>
                                }

                                {detailRaceRoadmap?.file2_title &&
                                    <div className="sec-grid-docs">
                                        <div className="race-list-items">
                                            <span className="txt-sec">{detailRaceRoadmap?.file2_title}</span>
                                            <div className="wrap-docs">
                                                <button onClick={(e) => downloadFile(e, detailRaceRoadmap?.file2.data?.attributes?.url, "strapi")} formTarget="_blank">
                                                    <FileDownloadIcon sx={{ fontSize: 20 }} />
                                                </button>
                                            </div>
                                        </div>
                                        <hr style={{color: "#fff"}}/>
                                    </div>
                                }
                                
                                { detailRaceRoadmap?.file3_title &&
                                    <div className="sec-grid-docs">
                                        <div className="race-list-items">
                                            <span className="txt-sec">{detailRaceRoadmap?.file3_title}</span>
                                            <div className="wrap-docs">
                                                <button onClick={(e) => downloadFile(e, detailRaceRoadmap?.file3.data?.attributes?.url, "strapi")} formTarget="_blank">
                                                    <FileDownloadIcon sx={{ fontSize: 20 }} />
                                                </button>
                                            </div>
                                        </div>
                                        <hr style={{color: "#fff"}}/>
                                    </div>
                                }
                                
                                { detailRaceRoadmap?.file4_title &&
                                    <div className="sec-grid-docs">
                                    <div className="race-list-items">
                                        <span className="txt-sec">{detailRaceRoadmap?.file4_title}</span>
                                        <div className="wrap-docs">
                                            <button onClick={(e) => downloadFile(e, detailRaceRoadmap?.file4.data?.attributes?.url, "strapi")} formTarget="_blank">
                                                <FileDownloadIcon sx={{ fontSize: 20 }} />
                                            </button>
                                        </div>
                                    </div>
                                    <hr style={{color: "#fff"}}/>
                                    </div>
                                }
                                { detailRaceRoadmap?.file5_title && 
                                        <div className="sec-grid-docs">
                                        <div className="race-list-items">
                                            <span className="txt-sec">{detailRaceRoadmap?.file5_title}</span>
                                            <div className="wrap-docs">
                                                <button onClick={(e) => downloadFile(e, detailRaceRoadmap?.file5.data?.attributes?.url, "strapi")} formTarget="_blank">
                                                    <FileDownloadIcon sx={{ fontSize: 20 }} />
                                                </button>
                                            </div>
                                        </div>
                                        <hr style={{color: "#fff"}}/>
                                    </div>
                                }

                                {detailRaceRoadmap?.file6_title &&
                                        <div className="sec-grid-docs">
                                        <div className="race-list-items">
                                            <span className="txt-sec">{detailRaceRoadmap?.file6_title}</span>
                                            <div className="wrap-docs">
                                                <button onClick={(e) => downloadFile(e, detailRaceRoadmap?.file6.data?.attributes?.url, "strapi")} formTarget="_blank">
                                                    <FileDownloadIcon sx={{ fontSize: 20 }} />
                                                </button>
                                            </div>
                                        </div>
                                        <hr style={{color: "#fff"}}/>
                                    </div>
                                }
                                {detailRaceRoadmap?.file7_title && 
                                    <div className="sec-grid-docs">
                                        <div className="race-list-items">
                                            <span className="txt-sec">{detailRaceRoadmap?.file7_title}</span>
                                            <div className="wrap-docs">
                                                <button onClick={(e) => downloadFile(e, detailRaceRoadmap?.file7.data?.attributes?.url, "strapi")} formTarget="_blank">
                                                    <FileDownloadIcon sx={{ fontSize: 20 }} />
                                                </button>
                                            </div>
                                        </div>
                                        <hr style={{color: "#fff"}}/>
                                    </div>
                                }
                            </div>
                        </>
                    ) : (
                        <div className="while-null">
                            <span style={{color: "#000"}}>{t("There is no documents right now. Please hang on and get back to us soon!")}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="detail-content2">
                <div className="overview">
                    <span className="title2">
                        {t("ICF OFFICIAL PARTNERS")}
                        <hr style={{
                            backgroundColor: "#DC2028", 
                            width: "10%", 
                            border: "none", 
                            height: "2px",
                            maxWidth: "100px",
                            margin: "16px 0px 0px 0px",
                        }}/>
                    </span>
                    <div className="partner-list-race">
                        {partnerList.map((item, index) => (
                            <div key={index} className="content-list">
                                <img src={item.imagePartner} alt={item.label} style={{width: "64%"}}/>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="new1" style={{ backgroundColor: "#3131"}}/>
            </div>
        </div>
    )
}
