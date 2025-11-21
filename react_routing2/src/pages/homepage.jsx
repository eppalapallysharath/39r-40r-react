import React from 'react'
import { Link } from 'react-router-dom'
import { MainNavbar } from './mainnavbar'

export const Homepage = () => {
  return (
    <div>
        <MainNavbar/>
        <h1>homepage</h1>
        <Link to={"/login"}>Login page</Link>
    </div>
  )
}
