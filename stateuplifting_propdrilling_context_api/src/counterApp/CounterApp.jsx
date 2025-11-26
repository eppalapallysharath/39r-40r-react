import React, { useState } from 'react'
import { CountValue } from './CountValue'
import { CountButtons } from './CountButtons'
export const CounterApp = () => {
   const [count, setCount] = useState(0)
   
  return (
    <div>
        <h2> CounterApp </h2>
        <CountValue countV={count}/>
        <CountButtons  count={count} updateCount={setCount}/>
    </div>
  )
}
