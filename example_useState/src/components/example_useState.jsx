import {useState} from "react"
import "./bike.css"
import {Light} from "./light"

export function Example (){
    const [count, setCount] = useState(10)
    const [start, setStart] =useState(true)
    const [bike, setBike] = useState(false);
    const[input, setInput] = useState("")
    const[name, setusername] = useState("")

    const inc = () =>{
        setCount(count + 1)
    }

    const rest = () =>{
        setCount(0)
    }

    function startBike(){
        setBike(!bike)
    } 

    function onchange(e){
        setusername(e.target.value)
    }

    return <>
    <p>useState example</p>
    <p>count {count}</p>
    <button onClick={inc}>+</button>
    <button onClick={()=> setCount(count-1)}>-</button>
    <button  onClick={rest} >rest</button>
    {start ? <p>Car is started</p> : <p>car is stopped </p>}
    {start ?<button onClick={()=>setStart(false)}>stop</button> :<button onClick={()=>setStart(true)}>start</button> }
    {start && <p>car lights are on</p>}
    <p style={{ color:bike ? "green" : "red" }} className={bike ? "bike-started" : "bike-stopped" }>{bike ? "bike is moving on road": "bike is stopped on road"}</p>
    <button onClick={startBike}>{bike ? "stop bike" : "start bike"}</button>
    <Light isLight = {bike} model = {["1250GS", "ktm 390", "bajja dominer 400"]}/>
    <input type="text" onChange={(e)=>setInput(e.target.value)} />
    <p>{input}</p>
    <p>{name}</p>
    <input type="text" onChange={(e)=>onchange(e)} />
    </>
}