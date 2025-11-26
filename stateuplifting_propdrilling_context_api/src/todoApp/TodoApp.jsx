import React, { useState } from 'react'
import { TodoInput } from './todoinput'
import { TodoList } from './TodoList'

export const TodoApp = () => {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <h3>TodoApp</h3>
      <TodoInput todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}
