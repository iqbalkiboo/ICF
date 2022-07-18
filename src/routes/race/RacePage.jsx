
import { useEffect, useState } from 'react'
import { Tabs, Tab } from "@material-ui/core"
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import '../../assets/style/race.css'
import PastRace from './components/PastRace'
import UpComingRace from './components/UpComingRace'
import imageDefault from '../../assets/image/images-banner-default.svg'
import axios from 'axios'
import moment from 'moment'
import { useNavigate } from 'react-router'
import raceParams from '../../service/URL/race/raceParams'
import API from '../../service/API'

export default function RacePage() {
    const navigate = useNavigate()
    const [value, setValue] = useState("0");
    const [isPastRace, setIsPastRace] = useState(false)
    const [dataRaces, setDataRaces] = useState([])
    const [dataNull, setDataNull] = useState([])
    const [upcomingRaces, setUpcomingRaces] = useState([])
    const [firstUpcomingRace, setFirstUpcomingRace] = useState({})
    const paramRace = raceParams.getUrlRaceDetail
    const [imageRace, setImageRace] = useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setIsPastRace(!isPastRace)
    };

    const fetchRaceList = () => {
        try {
            return axios(`${process.env.REACT_APP_BE_URL_MEMBER}/races?page=1&size=10&is_past_race=${isPastRace}`)
            .then((res) => {
                setDataRaces(res?.data?.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUpcomingRace = () => {
        try {
            return axios(`${process.env.REACT_APP_BE_URL_MEMBER}/races?page=1&size=3`)
            .then((res) => {
                setDataNull(res.data.data)
                if(res?.data?.data.length >0) { 
                    setFirstUpcomingRace(res?.data?.data[0])
                    setUpcomingRaces(res?.data?.data.slice(1))

                    return res?.data?.data[0]
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchDetailRaceStrapi = (id) => {
        try {
            return API.GET_RACE_DETAIL('?' + paramRace.filter + `https://member.icf.id/race-management/all/${id}` + paramRace.populate)
            .then((res) => {
                setImageRace(res?.data?.data[0].attributes?.image?.data?.attributes?.url)
            })

    
        } catch (error) {
            console.log(error)
        }
    }
    const registerRace = (e, raceId) => { 
        e.preventDefault();
        window.location.href= `https://member.icf.id/race-management/all/${raceId}`;
    }

    const handleDetailRace = (e, raceId) => {
        e.preventDefault();
        navigate(`/calendar/${raceId}`, { 
            replace: true
        });
    }

    useEffect(() => {
        fetchUpcomingRace()
        .then(race => { 
            fetchDetailRaceStrapi(race.id)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageRace])
    
    useEffect(() => {
        fetchRaceList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isPastRace])
    return (
        <div>
            {
                dataNull.length === 0 ? (
                    <div className="hero-image">
                        <img src={imageDefault} alt="" />
                    </div>
                ) : (
                    <div className="hero-image">
                        <img src={`${process.env.REACT_APP_BE_URL}` + imageRace } alt="" />
                    </div>
                )
            }
            <div className="detail-content">
                <div className="content-race">
                    {dataNull.length === 0 ? (
                        <div className="while-null">
                            <span>There is no upcoming race right now. Please hang on and get back to us soon!</span>
                        </div>
                    ) : (
                        <>
                            <div className="sub-title-race">
                                <span>{firstUpcomingRace?.nama_event}</span>
                            </div>
                            <div className="title-race">
                                <span>
                                    {firstUpcomingRace?.tipe_race}
                                </span>
                            </div>
                            <div className="btn-race">
                                <button onClick={(e) => registerRace(e, firstUpcomingRace?.id)}>
                                    <span>Register Race</span>
                                </button>
                            </div>
                        </>
                    )}
                    {upcomingRaces.length === 0 ? (
                        <div className="main-content-race">
                            <div className="card-race-null">
                                <div className="detail-timeline-null" >
                                    <div>UP NEXT</div>
                                    <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>-</div>
                                    <div style={{fontSize: "12px", padding: "2px 0"}}>-</div>
                                    <div style={{fontSize: "12px", padding: "2px 0"}}>-</div>
                                </div>
                                <hr className="path-rows"/>
                                <div className="wrap-content-card-race-null">
                                    <div>-</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="main-content-race">
                            {upcomingRaces?.map((item, index) => ( 
                                <div className="card-race" key={index}>
                                    <div className="detail-timeline" >
                                        <div>UP NEXT</div>
                                        <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>{moment(item?.tgl_ditutup).format("DD")}</div>
                                        <div style={{fontSize: "12px", padding: "2px 0"}}>{moment(item?.tgl_ditutup).format("MMMM")}</div>
                                        <div style={{fontSize: "12px", padding: "2px 0"}}>{moment(item?.tgl_ditutup).format("YYYY")}</div>
                                    </div>
                                    <hr className="path-rows"/>
                                    <div className="wrap-content-card-race">
                                        <span>
                                        {item?.nama_event}
                                        </span>
                                        <div className="chips-race">
                                            <span> {item?.tipe_race}</span>
                                        </div>
                                        <div className="btn-card">
                                            <button onClick={(e) => handleDetailRace(e, item?.id)}>View Details</button>
                                            <button onClick={(e) => registerRace(e, item?.id)}>Register Race</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <TabContext value={value}>
                        <div className="tabs">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={{ style: {background:'white'} }}
                                centered
                                >
                                <Tab label="UPCOMING" value="0" />
                                <Tab label="PAST" value="1" />
                            </Tabs>
                        </div>
                        {dataNull.length === 0 ? (
                            <div className="while-null">
                                <span className="main-null">There is no upcoming race right now. You could see our past race in the past race menu</span>
                            </div>
                        ) : (
                            <div>
                                <TabPanel value="0">
                                    <UpComingRace props={dataRaces}/>
                                </TabPanel>
                                <TabPanel value="1">
                                    <PastRace props={dataRaces}/>
                                </TabPanel>
                            </div>
                        )}
                    </TabContext>
                </div>
            </div>
        </div>
    )
}
