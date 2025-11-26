import React,{createContext} from 'react'
import { Child } from './child'
import App from "../App"
import { Child2 } from '../child2'

// export const Parent = () => {
//     const user = {name:"tom", age:20}
//   return (
//     <div>
//         <h1>parent</h1>
//         <Child user={user}/>
//     </div>
//   )
// }

export const dataContext = createContext()

export const Parent = () => {
    const user = {name:"jerry", age:5} 
    const world  = "hello world"
  return (
    <div>
        Parent
        <dataContext.Provider value={{user, world}}>
            <Child/>
            <Child2/>
        </dataContext.Provider>
    </div>
  )
}
