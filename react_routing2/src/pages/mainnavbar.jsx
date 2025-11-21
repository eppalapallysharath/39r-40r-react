import React from 'react'
import { Link } from 'react-router-dom'

export const MainNavbar = () => {
  return (
   <ul>
        <li><Link to = "/">HomePage</Link></li>
        <li><Link to = "/login">Login</Link></li>
      </ul>
  )
}
