import React from 'react'

export const TodoList = (props) => {
    const {todos, setTodos} = props

    const handleDelete = (i) =>{
      const newTodo= todos.filter((v, index) => i!==index)
      setTodos(newTodo)
    }
  return (
    <div>
        <ol>
            {todos.map((v,i) => <li key={v}>{v} <button onClick={()=>handleDelete(i)}>delete</button></li>)}
        </ol>
    </div>
  )
}
