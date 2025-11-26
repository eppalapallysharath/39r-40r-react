import React, { useContext } from 'react'
import { dataContext } from './props/Parent'

export const Child2 = () => {
 const context = useContext(dataContext) 
 console.log(context?.user)
  return (
    <div>child2
        <h1>{context.user.name}</h1>
    </div>
  )
}
