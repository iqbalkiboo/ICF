import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Headers() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Invoices</Link> |{" "}
        <Link to="/news">Expenses</Link>
      </nav>

      <Outlet />
    </div>
  )
}
