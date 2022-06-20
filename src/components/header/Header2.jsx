import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ICFLogo from '../../assets/image/icf-logo.svg'
import Ellipse from '../../assets/icon/Ellipse.svg'

export default function Headers() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={ICFLogo} alt="ICF"/>
        </Link> {" "}
        <Link to="/icf">ICF CHAMPIONSHIP</Link>{" "}
        <Link to="/news">NEWS</Link>{" "}
        <Link to="/regulation">REGULATION</Link>{" "}
        <Link to="/news">LICENSE REGISTRATION</Link>{" "}
        <Link to="/about">ABOUT ICF</Link>{" "}
          <Link to="/live">
            <img src={Ellipse} alt="live"/>
          </Link>{" "}
      </nav>
      <Outlet />
    </div>
  )
}
