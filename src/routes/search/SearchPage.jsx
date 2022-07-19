import React, { useState } from 'react'
import '../../assets/style/search.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import newsListParams from '../../service/URL/news/newsListParams'
import API from '../../service/API'
import LinesEllipsis from 'react-lines-ellipsis'
import moment from 'moment'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

export default function SearchPage() {
    const location = useLocation();
    const navigate = useNavigate()
    const { t } = useTranslation();
    const newsParams = newsListParams.getUrlNewsList
    const values = location.search.split("=").slice(-1)
    const [searchValue, setSearchValue] = useState(values[0].replaceAll("+", " "))
    const [dataNews, setDataNews] = React.useState([])
    const [dataRaces, setDataRaces] = React.useState([])

    const handleDetailRace = (e, raceId) => {
        e.preventDefault();
        navigate(`/calendar/${raceId}`, { 
            replace: true
        });
    }

    React.useEffect(() => {
        setSearchValue(decodeURIComponent(searchValue))

        const fetchNews = (newsParams) => {
            try {
              

                const searchFilter = 
                  `filters[$or][0][title][$containsi]=${searchValue}` 
                + `&filters[$or][1][description][$containsi]=${searchValue}` 
                + `&filters[$or][2][category][$containsi]=${searchValue}`
                + `&filters[$or][3][subcategory][$containsi]=${searchValue}`

                const searchParam = searchValue !== '+' ? searchFilter : "";

                return API.GET_NEWS(
                    '?' 
                    + newsParams.sort 
                    + newsParams.populate
                    + searchParam
                ).then((res) => {
                    setDataNews(res?.data?.data)
                })
            } catch (error) {
                console.log(error)
            }
        }

        const fetchRaces = () => {
            try {

                return axios.get(
                    `${process.env.REACT_APP_BE_URL_MEMBER}/races/search?search=${searchValue}`
                ).then((res) => {
                    setDataRaces(res?.data?.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchNews(newsParams)
        fetchRaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="search-pages">
            <div className="sub-labels">
                {t("SEARCH RESULT FOR")} :
            </div>
    
            <span className="labels">{searchValue}</span>
            <div className="sub-categ">
                <span className="labels">{t("NEWS")}</span>
                <div className="list-search-event">
                    {dataNews?.map((item,index) => (
                         <div key={index} className="content-list">
                         <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url } alt="event-bike" style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
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
                                 text={item?.attributes?.description}
                                 maxLine='1'
                                 ellipsis='...'
                                 trimRight
                                 basedOn='letters'
                             />
                             <div className="footlabel">
                                 <Link to={`/news/${item?.id}`}> <span>Read More...</span> </Link>
                                 <span>
                                     {moment(item?.attributes?.publishedAt).format('DD MMMM YYYY')}
                                 </span>
                             </div>
                         </div>
                     </div>
                    ))}
                </div>
            </div>
            <div className="sub-categ">
                <span className="labels">{t("ICF CHAMPIONSHIP")}</span>
                <div className="list-news-event">
                    {dataRaces?.map((item,index) => (
                        <div key={index} className="cards">
                            <img src={`${process.env.REACT_APP_BE_URL_MEMBER_UPLOAD}` + item?.poster } alt="card-event"/>
                            <div className="container">
                                <div className="h4">
                                    {item?.nama_event}
                                </div> 
                                <div className="chip">
                                    <button className="flag-tag" disabled>{item?.tipe_race}</button> 
                                </div>
                                
                                <span>Registration Date:</span>
                                <div className="dates">{moment(item?.tgl_dibuka).format('DD MMMM YYYY') + " - " + moment(item?.tgl_ditutup).format('DD MMMM YYYY') }</div>
                                <span>
                                    Class / Category:
                                </span>
                                <div className="desc">
                                 {JSON.parse(item?.kelas).map(kelas => kelas.kelas + ", ")}
                                </div>
                                <div className="btn-cards">
                                    <button className="btn-view-detail" onClick={(e) => handleDetailRace(e, item?.id)}>
                                        View Details
                                    </button>
                                    <button className="btn-register">
                                        <a href={`https://member.icf.id/race-management/all/${item?.id}`} target="_blank" rel="noreferrer">Register Race</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    )
}