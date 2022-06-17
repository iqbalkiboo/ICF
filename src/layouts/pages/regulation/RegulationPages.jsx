import { Grid } from '@mui/material'
import React from 'react'
import '../../../assets/style/about.css'
import imageRegulation from '../../../assets/image/regulations.png'
// import NestedList from './components/NestedList'

export default function RegulationPages() {
    return (
        <>
            <div className="about-pages">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="about-pages" style={{width: "80%"}}>
                            <div style={{textAlign: "left", fontSize: "42px", fontWeight: "600", padding: "10px auto"}}>REGULATIONS</div>
                                <div className="story" style={{textAlign: "left"}}>
                                Translations of the UCI Constitution and Regulations in various languages are available on the website of several National Federations. These texts provide guidance for users, however they cannot be considered as official texts binding the responsibility of the UCI. In the case of disparity between the UCI’s original version and one of the translations, only the original UCI texts should be taken into account.
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <img src={imageRegulation} alt="regulation-icf" style={{ width: "100%", objectFit: "cover"}}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <div style={{ width: "50%", margin: "30px auto", textAlign: "left"}}>
                            <div style={{padding: "4px"}}>
                                LAPORAN KERJA BIDANG ORGANISASI PB ISSI
                            </div>
                            <hr style={{color: "#DC2028"}}/>
                            <div style={{padding: "4px"}}>
                                ANGGARAN DASAR ISSI
                            </div>
                            <hr />
                            <div style={{padding: "4px"}}>
                                ANGGARAN RUMAH TANGGA ISSI
                            </div>
                            <hr />
                            <div style={{padding: "4px"}}>
                                PERATURAN PERWASITAN
                            </div>
                            <hr />
                            <div style={{padding: "4px"}}>
                                PERATURAN PERLOMBAAN
                            </div>
                            <hr />
                            <div style={{padding: "4px"}}>
                                POIN NASIONAL
                            </div>
                            <hr />
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="about-pages" style={{margin: "0 auto", padding: "40px 10px"}}>
                            <div style={{textAlign: "left", padding: "40px 100px"}}>
                                <span>LAPORAN KERJA BIDANG ORGANISASI PB ISSI</span>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                </Grid>
                                <hr style={{color: "#fff"}}/>
                            </div>
                            <div style={{textAlign: "left", padding: "40px 100px"}}>
                                <span>ANGGARAN DASAR ISSI</span>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                </Grid>
                                <hr style={{color: "#fff"}}/>
                            </div>
                            <div style={{textAlign: "left", padding: "40px 100px"}}>
                                <span>ANGGARAN RUMAH TANGGA ISSI</span>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                </Grid>
                                <hr style={{color: "#fff"}}/>
                            </div>
                            <div style={{textAlign: "left", padding: "40px 100px"}}>
                                <span>PERATURAN PERWASITAN</span>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                </Grid>
                                <hr style={{color: "#fff"}}/>
                            </div>
                            <div style={{textAlign: "left", padding: "40px 100px"}}>
                                <span>PERATURAN PERLOMBAAN</span>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                </Grid>
                                <hr style={{color: "#fff"}}/>
                            </div>
                            <div style={{textAlign: "left", padding: "40px 100px"}}>
                                <span>POIN NASIONAL</span>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                    <Grid item xs={6}>
                                        LAPORAN 2022
                                    </Grid>
                                </Grid>
                                <hr style={{color: "#fff"}}/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
