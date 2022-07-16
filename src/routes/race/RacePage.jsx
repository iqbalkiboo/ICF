
import { useEffect, useState } from 'react'
import { Tabs, Tab } from "@material-ui/core"
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import '../../assets/style/race.css'
import PastRace from './components/PastRace'
import UpComingRace from './components/UpComingRace'
import axios from 'axios'
import raceListParams from '../../service/URL/race/raceListParams'

export default function RacePage() {
    const [value, setValue] = useState("0");
    const [dataRace, setDataRace] = useState({})

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchRaceList = (paramRace) => {
        try {
            // return axios('?' + paramRace.filter + 'true')
            return axios(`${process.env.REACT_APP_BE_URL_MEMBER}/races?page=1&size=10&is_past_race=true`)
            .then((res) => {
                console.log(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRace = () => {
        try {
            return axios(`${process.env.REACT_APP_BE_URL_MEMBER}/races/53`)
            .then((res) => {
                setDataRace(res.data.data)
                // console.log(JSON.parse(res.data.data.kelas))
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const paramRace = raceListParams.getUrlRaceList
        fetchRace()
        fetchRaceList(paramRace)
    },[])
    return (
        <div>
            <div className="hero-image" />
            <div className="detail-content">
                <div className="content-race">
                    <div className="sub-title-race">
                        <span>{dataRace.nama_event}</span>
                    </div>
                    <div className="title-race">
                        <span>
                            {dataRace.owner}
                        </span>
                    </div>
                    <div className="btn-race">
                        <button>
                            <span>Register Race</span>
                        </button>
                    </div>
                    <div className="main-content-race">
                    <div className="card-race">
                            <div className="detail-timeline" >
                                <div>UP NEXT</div>
                                <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>17</div>
                                <div style={{fontSize: "12px", padding: "2px 0"}}>AUGUST</div>
                                <div style={{fontSize: "12px", padding: "2px 0"}}>2022</div>
                            </div>
                            <hr className="path-rows"/>
                            <div className="wrap-content-card-race">
                                <span>
                                    INDONESIA INDEPENDENT DAYS II WORLD CHAMPIONSHIP
                                </span>
                                <div className="chips-race">
                                    <span>Off Road</span>
                                </div>
                                <div className="btn-card">
                                    <button>View Details</button>
                                    <button>Register Race</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-race">
                            <div className="detail-timeline" >
                                <div>UP NEXT</div>
                                <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>18</div>
                                <div style={{fontSize: "12px", padding: "2px 0"}}>AUGUST</div>
                                <div style={{fontSize: "12px", padding: "2px 0"}}>2022</div>
                            </div>
                            <hr className="path-rows"/>
                            <div className="wrap-content-card-race">
                                <span>
                                    INDONESIA INDEPENDENT DAYS II WORLD CHAMPIONSHIP
                                </span>
                                <div className="chips-race">
                                    <span>Off Road</span>
                                </div>
                                <div className="btn-card">
                                    <button>View Details</button>
                                    <button>Register Race</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div>
                            <TabPanel value="0">
                                <UpComingRace props={dataRace.id}/>
                            </TabPanel>
                            <TabPanel value="1">
                                <PastRace props={dataRace.id}/>
                            </TabPanel>
                        </div>
                    </TabContext>
                    
                </div>
            </div>
        </div>
    )
}
