import React, { useState } from 'react'

export const TodoInput = (props) => {
    const [input, setInput] = useState("")
    const {todos, setTodos} = props

    const addtodo = () =>{
        const trim = input.trim()
        if(trim.length > 0){
            setTodos([...todos, trim])
        }
    }
  return (
    <div>
        <input type='text' name="todos" placeholder='enter todos' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addtodo}>Add</button>
    </div>
  )
}
