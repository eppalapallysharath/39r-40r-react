import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainNavbar } from './mainnavbar'

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("submit")
        const data =  [{username: "sharath", password:"123456", role:"admin"}, {username: "tom", password:"tom1234" ,role:"student"}]
        const user = data.find(value => { return value.username == username && value.password==password})
        if(user) {
            alert("login successful")
            if(user.role === "admin"){
                navigate("/admin/dashboard")
            }
            else if(user.role === "student"){
                navigate("/student/dashboard")
            }
        }else{
            alert("login failed")
        }
    }

  return (<>
  <MainNavbar/>
    <form onSubmit={handleSubmit}>
        <p>Login</p>
        <p>username</p>
        <input type='text' name='username'  onChange={(e)=>setUsername(e.target.value)} />
        <p>password</p>
        <input type='password'  name='password' onChange={(e)=>setpassword(e.target.value)} />
        <div>
            <button >Login</button>
        </div>
    </form>
    </>
  )
}
