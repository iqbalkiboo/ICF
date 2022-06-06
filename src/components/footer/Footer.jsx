import React from 'react'
import '../../assets/style/footer.css'
import LogoICF from '../../assets/icon/logo.svg'
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
                    <span> Phone : <a href="tel:+6221 837 925 24">+6221 837 925 24</a></span>
                    <span>Email : <a href="mailto:issi@gmail.com">issi@gmail.com</a></span>

                    <div className="list-right" style={{marginTop: '20px'}}>
                        <a href="https://www.facebook.com/IndonesianCyclingFederation/">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="https://twitter.com/icf_cycling">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="https://www.instagram.com/icf_cycling/">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer