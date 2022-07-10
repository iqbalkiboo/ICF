import { Grid } from '@mui/material'
import '../../assets/style/contact.css'
import imageAbout1 from '../../assets/image/about/about1.png'

export default function ContactPage() {
    return (
        <div className="main-style">
            <div className="labels">
                Contact Us
            </div>
            <div className="content">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <div className="main-content">
                            <span>Indonesian Cycling Federation</span>
                            <ul>
                                <li><a href="tel:+62817401551" target={"_blank"} rel="noreferrer">+62 817401551</a></li>
                                <li><a href="mailto:sekretariat@icf.id" target={"_blank"} rel="noreferrer">sekretariat@icf.id</a></li>
                                <li>
                                    <a 
                                        href="https://www.google.com/maps/place/Kantor+PB+ISSI/@-6.2446778,106.7938099,15z/data=!4m2!3m1!1s0x0:0x14bab2d133fdf483?sa=X&ved=2ahUKEwiV75zfm7_4AhW1SGwGHUkFBtUQ_BJ6BAgyEAU" 
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >Jl. Barito I No.29, RT.4/RW.1, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130</a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="main-content" style={{justifyContent: "center"}}>
                            <div className="path"></div>
                            <span>Social Media</span>
                            <ul>
                                <li><a href="https://www.instagram.com/icf_cycling/" target={"_blank"} rel="noreferrer">Instagram</a></li>
                                <li><a href="https://www.facebook.com/IndonesianCyclingFederation/" target={"_blank"} rel="noreferrer">Facebook</a></li>
                                <li><a href="https://twitter.com/icf_cycling" target={"_blank"} rel="noreferrer">Twitter</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="img-content">
                            <img src={imageAbout1} alt="contact" />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <hr />
        </div>
    )
}
