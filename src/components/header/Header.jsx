import React from 'react'
import '../../assets/style/header.css'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import instagram from '../../assets/icon/instagram.svg'

function Header() {
    return (
        <div className="sections">
            <header className="header">
                <ul className="list-nav">
                    <li name="login">
                        <div className="navbar">
                            <a href="#login">LOG IN</a>
                        </div>
                    </li>
                    <li name="contact">
                        <div className="navbar">
                            <a href="#contact">CONTACT US</a>
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
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="twitter" />
                    <span>
                        INA | EN
                    </span>
                </div>
            </header>
        </div>
    )
}

export default Header
