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
    const { id } = useParams();
    const [data, setData] = useState({})
    const [detailRace, setDetailRace] = useState({})
    const [detailUpcomingRace, setDetailUpcomingRace] = useState({})
    const [detailRaceRoadmap, setDetailRaceRoadmp] = useState({})

    const fetchDetailRaceStrapi = () => {
        try {
            return API.GET_RACE_DETAIL('?' + paramRace.filter + `https://member.icf.id/race-management/all/${id}`)
            .then((res) => {
                setData(res?.data?.data[0].attributes)
            })

    
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRaceRoadmap = () => {
        try {
            return API.GET_RACE_ROADMAP('?' + raceRoadmapParams.filter + `https://member.icf.id/race-management/all/${id}` + raceRoadmapParams.populate)
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
        switch (url) {
            case "member":
                window.location.href = process.env.REACT_APP_BE_URL_MEMBER_UPLOAD + path
                break;
            case "strapi":
                window.location.href = process.env.REACT_APP_BE_URL + path
                break;
        
            default:
                break;
        }
        

      }

      const registerRace = (e, raceId) => { 
        e.preventDefault();
        window.location.href= `https://member.icf.id/race-management/all/${raceId}`;
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
            <div className="hero-image">
                <div className="wrap-race-detail">  
                    <div className="sub-title-race">
                        <span>{detailRace?.nama_event}</span>
                    </div>
                    {detailRace?.can_register_race && 
                        <div className="btn-race-detail">
                            <button onClick={(e) => registerRace(e, detailRace?.id)}>
                                <span>Register Race</span>
                            </button>
                        </div>
                    }
                    <div className="main-content-race-detail">
                        <div className="card-race-detail">
                            <div className="detail-timeline">
                                <div>UP NEXT</div>
                                <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>{moment(detailUpcomingRace?.tgl_ditutup).format("DD")}</div>
                                <div style={{fontSize: "12px", padding: "2px 0"}}>{moment(detailUpcomingRace?.tgl_ditutup).format("MMMM").toUpperCase()}</div>
                            </div>
                            <div className="wrap-content-card-race-detail">
                                <span>
                                    {detailUpcomingRace?.nama_event}
                                </span>
                                <div className="chips-race">
                                    <span> {detailUpcomingRace?.tipe_race}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* head race detail */}

            <div className="detail-content">
                <span className="labels">
                    OVERVIEW
                </span>
                <div className="overview">
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
                    <div className="sec-grid">
                        {/* grid 1 */}
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
                     
                        {/* grid 2 */}
                        {data?.timeline_date2 && 
                          <div className="date-list">
                          <div style={{fontWeight: "600"}}>
                                  {moment(data?.timeline_date2).format('DD MMMM').toUpperCase()}
                              </div>
                              <span>{moment(data?.timeline_date2).format('dddd').toUpperCase()}</span>
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
                      
                    {data?.timeline_date3 && 
                        <div className="date-list">
                        <div style={{fontWeight: "600"}}>
                            {moment(data?.timeline_date3).format('DD MMMM').toUpperCase()}
                        </div>
                        <span>{moment(data?.timeline_date3).format('dddd').toUpperCase()}</span>
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
                        
                    </div>
                </div>
            </div>
            
            <div className="detail-content2">
                <div className="overview">
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
                </div>
            </div>
            <div className="detail-content2">
                <div className="overview">
                    <span className="title2">
                        ICF OFFICIAL PARTNERS
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
            </div>
        </div>
    )
}
