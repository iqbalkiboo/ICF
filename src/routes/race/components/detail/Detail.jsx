import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import partner1 from '../../../../assets/image/partners/image1.svg'
import partner2 from '../../../../assets/image/partners/image2.svg'
import partner3 from '../../../../assets/image/partners/image3.svg'
import partner4 from '../../../../assets/image/partners/image4.svg'
import API from '../../../../service/API';
import raceParams from '../../../../service/URL/race/raceParams';
import { useParams } from 'react-router';

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
    const [data, setData] = useState([])

    const fetchDetailRace = () => {
        try {
            return API.GET_RACE_DETAIL('?' + paramRace.filter + `https://member.icf.id/race-management/all/${id}`)
            .then((res) => {
                setData(res?.data?.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    console.log('==>',data)

    useEffect(() => {
        fetchDetailRace()
    }, [])
    return (
        <div>
            {/* head race detail */}
            <div className="hero-image">
                <div className="wrap-race-detail">  
                    <div className="sub-title-race">
                        <span>ICF BMX NATIONAL CHAMPIONSHIP 2022</span>
                    </div>
                    <div className="main-content-race">
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <div className="card-race-detail">
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <div style={{textAlign: "center", padding: "0 12px"}}>
                                                <div>UP NEXT</div>
                                                <div style={{fontSize: "22px", fontWeight: "600", padding: "4px 0"}}>17</div>
                                                <div style={{fontSize: "12px", padding: "2px 0"}}>AUGUST</div>
                                            </div>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography>INDONESIA INDEPENDENT DAYS WORLD CHAMPIONSHIP</Typography>
                                            <div className="chips-race">
                                                <span>Off Road</span>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            
            {/* head race detail */}

            <div className="detail-content">
                <span className="labels">
                    OVERVIEW
                </span>
                <div className="overview">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <span className="title">
                                WELCOME TO  PULOMAS: INTERNATIONAL BMX CIRCUIT EAST JAKARTA
                            </span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "10%", 
                                border: "none", 
                                height: "2px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="sec-grid">
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src="https://www.youtube.com/embed/eyRucU54NPY" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="detail-content2">
                <div className="overview">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <span className="title2">
                                26 MARCH 2022
                            </span>
                            <hr style={{
                                backgroundColor: "#DC2028", 
                                width: "10%", 
                                border: "none", 
                                height: "2px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="sec-grid-docs">
                                <span>
                                    Situated less than 100km south of Sydney, the Australian city with spectacular scenery, including the South Pacific to the east and Mont Keira to the west, will host the event from 18 to 25 September 2022.

                                    Some 1000 athletes are expected at the 2022 UCI Road World Championships, where they will discover courses conducive to gripping races with magnificent circuits and an innovative programme.

                                    The routes, designed to meet the expectations of athletes and fans alike, will give spectators the chance to witness the next winners of the rainbow jersey in an exceptional setting.
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="overview">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <span className="title2">
                                OFFICIAL DOCUMENTS
                            </span>
                            <hr style={{
                                backgroundColor: "#DC2028", 
                                width: "10%", 
                                border: "none", 
                                height: "2px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="sec-grid-docs">
                                <span className="txt-sec">2022 ICF BMX NATIONAL CHAMPIONSHIP: QUALIFICATION SYSTEM</span>
                                <span>
                                    <FileDownloadIcon sx={{ fontSize: 20 }} />
                                </span>
                            </div>
                            <hr style={{color: "#fff", width: "88%"}}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="detail-content">
                <div className="overview">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <span className="title">
                                PULOMAS 2022 - RACE TIMELINE
                            </span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "10%", 
                                border: "none", 
                                height: "2px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="sec-grid">
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={5}>
                                        {/* grid 1 */}
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                17 AUGUST
                                            </div>
                                            <span>WEDNESDAY</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                <li>
                                                    OFF MEN JUNIOR: PULOMAS 2022
                                                </li>
                                                <li>
                                                    OFF MEN JUNIOR: PULOMAS 2022
                                                </li>
                                            </ul>
                                        </div>
                                        {/* grid 2 */}
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                19 AUGUST
                                            </div>
                                            <span>FRIDAY</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                <li>
                                                    OFF MEN JUNIOR: PULOMAS 2022
                                                </li>
                                                <li>
                                                    OFF MEN JUNIOR: PULOMAS 2022
                                                </li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <div className="date-list">
                                            <div style={{fontWeight: "600"}}>
                                                18 AUGUST
                                            </div>
                                            <span>THURSDAY</span>
                                            <hr style={{
                                                backgroundColor: "#fff", 
                                                width: "100%", 
                                                border: "none", 
                                                height: "1px",
                                                maxWidth: "100px",
                                                margin: "16px 0px 0px 0px",
                                            }}/>
                                            <ul>
                                                <li>
                                                    OFF WOMEN JUNIOR: PULOMAS 2022
                                                </li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="detail-content2">
                <div className="overview">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <span className="title2">
                                PULOMAS 2022 - ROAD RACE MAPS
                            </span>
                            <hr style={{
                                backgroundColor: "#DC2028", 
                                width: "10%", 
                                border: "none", 
                                height: "2px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="sec-docs">
                                <div className="sec-grid-docs">
                                    <span className="txt-sec">OFF MEN JUNIOR: PULOMAS 2022</span>
                                    <span>
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </span>
                                </div>
                                <hr style={{color: "#fff", width: "88%"}}/>
                            </div>
                            <div className="sec-docs">
                                <div className="sec-grid-docs">
                                    <span className="txt-sec">OFF MEN U23: PULOMAS 2022</span>
                                    <span>
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </span>
                                </div>
                                <hr style={{color: "#fff", width: "88%"}}/>
                            </div>
                            <div className="sec-docs">
                                <div className="sec-grid-docs">
                                    <span className="txt-sec">OFF WOMEN JUNIOR: PULOMAS 2022</span>
                                    <span>
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </span>
                                </div>
                                <hr style={{color: "#fff", width: "88%"}}/>
                            </div>
                            <div className="sec-docs">
                                <div className="sec-grid-docs">
                                    <span className="txt-sec">OFF WOMEN ELITE: PULOMAS 2022</span>
                                    <span>
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </span>
                                </div>
                                <hr style={{color: "#fff", width: "88%"}}/>
                            </div>
                            <div className="sec-docs">
                                <div className="sec-grid-docs">
                                    <span className="txt-sec">OFF MEN ELITE: PULOMAS 2022</span>
                                    <span>
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </span>
                                </div>
                                <hr style={{color: "#fff", width: "88%"}}/>
                            </div>
                            <div className="sec-docs">
                                <div className="sec-grid-docs">
                                    <span className="txt-sec">OFF PULOMAS CITY CIRCUIT</span>
                                    <span>
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </span>
                                </div>
                                <hr style={{color: "#fff", width: "88%"}}/>
                            </div>
                            <div className="sec-docs">
                                <div className="sec-grid-docs">
                                    <span className="txt-sec">EAST JAKARTA LOOP</span>
                                    <span>
                                        <FileDownloadIcon sx={{ fontSize: 20 }} />
                                    </span>
                                </div>
                                <hr style={{color: "#fff", width: "88%"}}/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="detail-content2">
                <div className="overview">
                    <span className="title2">
                        ICF OFFICIAL PARTNERS
                    </span>
                    <hr style={{
                        backgroundColor: "#DC2028", 
                        width: "10%", 
                        border: "none", 
                        height: "2px",
                        maxWidth: "100px",
                        margin: "16px 0px 0px 0px",
                    }}/>
                    <div className="partner-list">
                            <Grid container
                                spacing={1}
                                direction="coloumn"
                                alignItems="center"
                                justify="center"
                            >
                                    {partnerList.map((item) => (
                                        <Grid item xs={3}>
                                            <div key={item.label} className="content-list">
                                                <img src={item.imagePartner} alt={item.label} style={{width: "64%"}}/>
                                            </div>
                                        </Grid>
                                    ))}
                            </Grid>
                        </div>
                </div>
            </div>
        </div>
    )
}
