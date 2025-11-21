import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const AdminHome = () => {
  return (<>
    <ul>
      <li><Link to={"/admin/dashboard"}>Home</Link></li>
      <li><Link to={"/admin/profile"}>profile</Link></li>
      <li><Link to={"/admin/settings"}>settings</Link></li>
      <li><Link to={"/"}>logout</Link></li>
    </ul>
    <Outlet/>

    </>
  )
}
