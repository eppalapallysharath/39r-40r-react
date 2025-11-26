import React,{useContext} from 'react'
import { CounterApp } from './counterApp/CounterApp';
import { TodoApp } from './todoApp/TodoApp';
import { Parent } from './props/Parent';
import { dataContext } from './props/Parent';
import { Child2 } from './child2';

const App = () => {
  console.log(useContext(dataContext))
  return (
    <div>

      <h1>App components</h1>
      <Parent />
      <TodoApp/>
      {/* <Child2/> */}
      {/* <CounterApp /> */}
    </div>
  )
}

export default App;