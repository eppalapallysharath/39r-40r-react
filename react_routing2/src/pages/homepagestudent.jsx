import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Homepagestudent = () => {
  return (
    <div>homepagestudent
        <ul>
        <li><Link to = "/student/dashboard">student HomePage</Link></li>
      </ul>
        <Outlet/>
    </div>
  )
}

