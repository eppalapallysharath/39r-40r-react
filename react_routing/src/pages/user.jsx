import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const User = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    //  const usersData = [
    //     {id: 1, name:"sharath", company: "sra edutech", email:"sharath@gmail.com"},
    //     {id:2, name:"tom", company: "tom tech", email:"tom@gmail.com"}
    // ]
    // const data = usersData.find(u => u.id == id)
    // console.log(data)
  return (
    <div>
        {/* <p>user</p>
        <p>name {data.name}</p>
        <p>email {data.email}</p> */}
        {/* <p>company {data.company}</p> */}
        <p>{data.name}</p>
        <p>{data.id}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.website}</p>
    </div>
  )
}
