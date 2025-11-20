import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => setData(res.data))
    })
  return (
    <div style={{ width: " 400px", border:"1px solid blue"}}>
        <img src={data.image} width={"150px"} />
        <p>{data.title}</p>
        <p>{data.category}</p>
        <p>${data.price}</p>
    </div>
  )
}
