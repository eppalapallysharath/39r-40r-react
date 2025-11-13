import { useState } from "react"
import {UserSearch} from "./UserSearch"
import  {ExampleUnmounting} from "./unmounting"

function App (){
  const [show, setShow] = useState(false)

  return <>
    <h1>App components</h1>
    {/* <UserSearch/>  */}
    <button onClick={()=>setShow(!show)}>{show ? "hide" :"show" }</button>
     { show ? <ExampleUnmounting/> :<></> } 
  </>
}

export default App