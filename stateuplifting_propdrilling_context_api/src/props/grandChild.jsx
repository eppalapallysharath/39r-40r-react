import React,{useContext} from 'react'
import { dataContext } from './Parent'
// export const GrandChild = (props) => {
//     const {user} = props
//   return (
//     <div>
//         <h4>user info</h4>
//         <p>name {user.name} age {user.age}</p>
//     </div>
//   )
// }



export const GrandChild = () => {
    // const data = useContext(dataContext)
    return (
    <div>GgrandChild
        {/* <h1>{data.name} {data.age}</h1> */}
        <dataContext.Consumer>
            {value => <p>{value.user.name} {value.user.age} {value.world}</p> }
        </dataContext.Consumer>

    </div>
  )
}
