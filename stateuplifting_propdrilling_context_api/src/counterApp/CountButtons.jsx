import React from 'react'

export const CountButtons = (props) => {
    const {count, updateCount} = props
  return (
    <div>
        <button onClick={()=>updateCount(count+1)}>+</button>
        <button onClick={()=>updateCount(count-1)}>-</button>
    </div>
  )
}
