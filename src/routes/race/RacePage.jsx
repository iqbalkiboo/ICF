import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import '../../assets/style/race.css'

export default function RacePage() {
    return (
        <div>
            <div className="hero-image" />
            <div className="detail-content">
                <div className="content-race">
                    <div className="sub-title-race">
                        <span>2022 LOMBOK MANDALIKA WORLD CHAMPIONSHIP</span>
                    </div>
                    <div className="title-race">
                        <span>
                            Kapan lagi balapan sepeda off road dengan pemandangan keindahan pulau Mandalika di Indonesia. Event terbesar di mandalika yang dihadiri kurang lebih 20.000 pembalap internasional sedunia!
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
                                            <div className="chips">
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
                                            <div className="chips">
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
                </div>
            </div>
        </div>
    )
}
