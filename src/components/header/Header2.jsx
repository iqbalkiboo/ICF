import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ICFLogo from '../../assets/image/icf-logo.svg'
import Ellipse from '../../assets/icon/Ellipse.svg'
import '../../assets/style/header.css'

export default function Headers() {
  return (
    <div>
      <nav>
        <div className="navigations">
          <div className="image-navbar">
            <Link to="/">
              <img src={ICFLogo} alt="ICF"/>
            </Link> {" "}
          </div>
          <div className="main-navbar">
            <Link to="/icf">ICF CHAMPIONSHIP</Link>{" "}
            <Link to="/news" >NEWS</Link>{" "}
            <Link to="/regulation">REGULATION</Link>{" "}
            <a href="https://member.icf.id/daftar" target={"_blank"} rel='noreferrer'>LICENSE REGISTRATION</a>{" "}
            {/* <a href="https://www.w3schools.com" target="_blank">Visit W3Schools!</a> */}
            <Link to="/about">ABOUT ICF</Link>{" "}
          </div>
          <div className="live-navbar">
            <Link to="/live">
              <img src={Ellipse} alt="live"/>
            </Link>{" "}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
