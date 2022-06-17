import React from 'react'
import '../../assets/style/header.css'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import instagram from '../../assets/icon/instagram.svg'

// import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="sections">
            <header className="header">
                <ul className="list-nav">
                    <li name="login">
                        <div className="navbar">
                            <a href="https://member.icf.id/login">LOG IN</a>
                        </div>
                    </li>
                    <li name="contact">
                        <div className="navbar">
                            <a href="https://api.whatsapp.com/send/?phone=62817401551&text&app_absent=0">CONTACT US</a>
                        </div>
                    </li>
                    <li>
                        <div className="search-container">
                            <form>
                                <input className="search-field" type="text" placeholder="Search.." name="search" />
                            </form>
                        </div>
                    </li>
                </ul>
                <div className="list-right">
                    <a href="https://www.facebook.com/IndonesianCyclingFederation/">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://twitter.com/icf_cycling">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href="https://www.instagram.com/icf_cycling/">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <span>
                        INA | EN
                    </span>
                </div>
            </header>
        </div>
    )
}

export default Header
