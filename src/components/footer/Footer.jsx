import React from 'react'
import '../../assets/style/footer.css'
import LogoICF from '../../assets/icon/logo.svg'

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
                    <span> Phone : +6221 837 925 24</span>
                    <span>Email : issi@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer