
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Tabs, Tab } from "@material-ui/core"
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import '../../assets/style/race.css'
import PastRace from './components/PastRace'
import UpComingRace from './components/UpComingRace'
import axios from 'axios'

export default function RacePage() {
    const [value, setValue] = useState("0");
    const [dataRace, setDataRace] = useState({})

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchRace = () => {
        try {
            return axios(`${process.env.REACT_APP_BE_URL_MEMBER}` + '/races/53')
            .then((res) => {
                setDataRace(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRace()
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
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <div className="card-race">
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <div style={{textAlign: "center", padding: "0 12px"}}>
                                                <div>UP NEXT</div>
                                                <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>17</div>
                                                <div style={{fontSize: "12px", padding: "2px 0"}}>AUGUST</div>
                                                <div style={{fontSize: "12px", padding: "2px 0"}}>2022</div>
                                            </div>
                                        </Grid>
                                        <hr style={{ display: "inline-block", backgroundColor: "999", height: "109px"}}/>
                                        <Grid item xs zeroMinWidth>
                                            <Typography>INDONESIA INDEPENDENT DAYS WORLD CHAMPIONSHIP</Typography>
                                            <div className="chips-race">
                                                <span>Off Road</span>
                                            </div>
                                            <div className="btn-card">
                                                <button>View Details</button>
                                                <button className="btn-register">Register Race</button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="card-race">
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <div style={{textAlign: "center", padding: "0 12px"}}>
                                                <div>UP NEXT</div>
                                                <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>18</div>
                                                <div style={{fontSize: "12px", padding: "2px 0"}}>AUGUST</div>
                                                <div style={{fontSize: "12px", padding: "2px 0"}}>2022</div>
                                            </div>
                                        </Grid>
                                        <hr style={{ display: "inline-block", backgroundColor: "999", height: "109px"}}/>
                                        <Grid item xs zeroMinWidth>
                                            <Typography>INDONESIA INDEPENDENT DAYS II WORLD CHAMPIONSHIP</Typography>
                                            <div className="chips-race">
                                                <span>Off Road</span>
                                            </div>
                                            <div className="btn-card">
                                                <button>View Details</button>
                                                <button>Register Race</button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
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
