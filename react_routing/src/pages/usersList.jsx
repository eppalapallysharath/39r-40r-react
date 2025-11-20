import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const UserList = () => {
    const [data, setData] =useState([])
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    // const usersData = [
    //     {id: 1, name:"sharath", company: "sra edutech", email:"sharath@gmail.com"},
    //     {id:2, name:"tom", company: "tom tech", email:"tom@gmail.com"}
    // ]

    useEffect(
        ()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setData(res.data))
            .catch(err => console.log(err))

            axios.get("https://fakestoreapi.com/products")
            .then(res=>setProducts(res.data))
            .catch(err => console.log(err))
        }, 
        []
    )

  return (
    <div>
        {/* {usersData.map(v=> <div key={v.id} style={{ border:"1px solid red",  margin: "2px"}} onClick={()=>navigate("/user/"+v.name+"/"+v.id)}> 
            <p>employee name {v.name}</p>
        </div>)} */}

        {data.map((value) => <div key={value.id} style={{ border:"1px solid black" , margin:"2px"}} onClick={()=>{navigate(`/user/${value.name}/${value.id}`)}}>
            <p>{value.name}</p>
            <p>{value.phone}</p>
            <p>{value.email}</p>
        </div>)}
        {products.map(pro => <div key={pro.id} onClick={()=>navigate(`/product/${pro.id}`)}>
            <img src={pro.image}  width={"150px"}/>
            <p>{pro.title}</p>
        </div>)}
    </div>
  )
}
