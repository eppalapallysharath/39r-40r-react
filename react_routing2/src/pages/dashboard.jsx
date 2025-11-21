import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const data = useLocation()
    const navigate = useNavigate()
  return (
    <div>
        <p>Dashboard</p>
        <p>welocome to {data?.state?.username}</p>
        <button onClick={()=>navigate("/")}>logout</button>
    </div>
  )
}


// ?
//  ?? 
// ?.