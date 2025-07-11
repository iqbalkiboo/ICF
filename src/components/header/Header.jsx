import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import '../../assets/style/header.css'
import tiktok from '../../assets/icon/tiktok-logo.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import instagram from '../../assets/icon/instagram.svg'

import { Link } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState("en");
    const [value, setValue] = useState("");
    const { t } = useTranslation();

    const handleSearch = (event) => {
        setValue(event.target.value);
        event.preventDefault();
        // navigate("/search", { replace: true });
    };

    const valueSearch = () => {
        navigate("/search", { 
            replace: true,
            state: {
                params: value
            }
        });
    }

    const handleSwitchLanguage = () => {
        if (currentLang === "en") {
            i18n.changeLanguage("ina");
            setCurrentLang("ina");
        } else if (currentLang === "ina") {
            i18n.changeLanguage("en");
            setCurrentLang("en");
        }
    };

    return (
        <div className="sections">
            <header className="header">
                <ul className="list-nav">
                    <li name="login">
                        <div className="navbar">
                            <a href="https://member.icf.id/login" rel="noreferrer" target={"_blank"} >{t("LOG IN")}</a>
                        </div>
                    </li>
                    <li name="contact">
                        <div className="navbar">
                            <Link to="/contact">{t("CONTACT US")}</Link>
                        </div>
                    </li>
                    <li>
                        <div className="search-container">
                            <form onSubmit={() => valueSearch()}>
                                <input className="search-field" type="text" placeholder="Search.." name="search" value={value} onChange={(event) => handleSearch(event)}/>
                            </form>
                        </div>
                    </li>
                </ul>
                <div className="list-right">
                    <a href="https://vt.tiktok.com/ZSRQECGmV/" rel="noreferrer" target={"_blank"}>
                        <img src={tiktok} alt="tiktok" style={{marginRight: '12px'}}/>
                    </a>
                    <a href="https://www.facebook.com/IndonesianCyclingFederation/" rel="noreferrer" target={"_blank"} >
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://twitter.com/icf_cycling" rel="noreferrer" target={"_blank"} >
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href="https://www.instagram.com/icf_cycling/" rel="noreferrer" target={"_blank"} >
                        <img src={instagram} alt="instagram" />
                    </a>
                    {/* <span>
                        INA | EN
                    </span> */}
                    <span onClick={handleSwitchLanguage} className="switchLangBtn">
                        {currentLang.toUpperCase()}
                    </span>
                </div>
            </header>
        </div>
    )
}

export default Header
