import React, { useState } from 'react'
import { ChildMemo } from './child'
import  {Userdata} from "./userdata"

// const Child1 = React.memo(Child)

export const Parent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("sharath")
    const [username, setUsername] = useState("")
    const [data, setData] = useState([])
    console.log("parent")

    function add (){
        setData([...data, username])
    }

  return (
    <div>
        <h3>Parent</h3>
        <p>Count value {count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <hr/>
        <ChildMemo name={name}/>
        <button onClick={()=>setName("tom")}>change</button>
        <input type='text' placeholder='enter name'  onChange={(e)=>setUsername(e.target.value)} value={username}/>
        <button onClick={add}>add names</button>
        <Userdata userdata={data} />
    </div>
  )
}
