import React from 'react'
import { GrandChild } from './grandChild'

// export const Child = (props) => {
//   return (
//     <div>
//         <h2>Child</h2>
//         <GrandChild user={props.user}/>
//     </div>
//   )
// }


export const Child = () => {
  return (
    <div>
        child
        <GrandChild/>
    </div>
  )
}
