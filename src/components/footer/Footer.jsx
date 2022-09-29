import React from 'react'
import '../../assets/style/footer.css'
import LogoICF from '../../assets/icon/logo.svg'
import tiktok from '../../assets/icon/tiktok-logo.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import instagram from '../../assets/icon/instagram.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="wrap-footers">
                <div className="footer-content">
                    <span>Indonesian Cycling Federation</span>
                    <p>
                        The Indonesian Cycling Federation or ISSI (in Indonesian: Ikatan Sepeda Sport Indonesia) 
                        is the national governing body of cycle racing in Indonesia.
                    </p>
                    <img src={LogoICF} alt="" />
                </div>
                <div className="footer-content-right">
                    <span>Address: Jakarta Pusat 10270 Indonesia</span>
                    <span> Phone : <a href="tel:+62817401551">+62 817401551</a></span>
                    <span>Email : <a href="mailto:issi@gmail.com">issi@gmail.com</a></span>

                    <div className="list-right" style={{marginTop: '20px'}}>
                        <a href="https://vt.tiktok.com/ZSRQECGmV/" rel="noreferrer" target={"_blank"}>
                            <img src={tiktok} alt="tiktok" style={{marginRight: '12px'}}/>
                        </a>
                        <a href="https://www.facebook.com/IndonesianCyclingFederation/" rel="noreferrer" target={"_blank"}>
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="https://twitter.com/icf_cycling" rel="noreferrer" target={"_blank"}>
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="https://www.instagram.com/icf_cycling/" rel="noreferrer" target={"_blank"}>
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="new1"/>
            <div className="copyright">
                <span>
                    © Indonesian Cycling Federation 2022
                </span>
                <span>
                    Regulations
                </span>
            </div>
        </div>
    )
}

export default Footer