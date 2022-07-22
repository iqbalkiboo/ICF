import React, {useState} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import ICFLogo from '../../assets/image/icf-logo.svg'
import Ellipse from '../../assets/icon/Ellipse.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import instagram from '../../assets/icon/instagram.svg'
import '../../assets/style/header.css'

export default function Headers() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");
  const { t } = useTranslation();

  const refreshPage = () => {
    navigate(0);
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
    <div>
      <nav>
        <div className="navigations">
          <input type="checkbox" id="nav-check" />
          <div className="image-navbar">
            <Link to="/">
              <img src={ICFLogo} alt="ICF"/>
            </Link> {" "}
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="main-navbar">
            <Link to="/calendar" onClick={() => refreshPage()}>{t("CALENDAR")}</Link>{" "}
            <Link to="/news" onClick={() => refreshPage()}>{t("NEWS")}</Link>{" "}
            <Link to="/regulation" onClick={() => refreshPage()}>{t("REGULATION")}</Link>{" "}
            <a href="https://member.icf.id/daftar" rel="noreferrer" target="_blank" >{t("LICENSE REGISTRATION")}</a>
            <Link to="/about" onClick={() => refreshPage()}>{t("ABOUT ICF")}</Link>{" "}
            <div className="live-navbar" onClick={() => refreshPage()}>
              <Link to="/live">
                <img src={Ellipse} alt="live"/>
              </Link>{" "}
            </div>
            <div className="list-right-nav-hidden">
              <a href="https://www.facebook.com/IndonesianCyclingFederation/" rel="noreferrer" target={"_blank"} >
                  <img src={facebook} alt="facebook" />
              </a>
              <a href="https://twitter.com/icf_cycling" rel="noreferrer" target={"_blank"} >
                  <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/icf_cycling/" rel="noreferrer" target={"_blank"} >
                  <img src={instagram} alt="instagram" />
              </a>
              <span onClick={handleSwitchLanguage} className="switchLangBtn">
                  {currentLang.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
