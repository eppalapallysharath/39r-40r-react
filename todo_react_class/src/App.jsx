import { Component } from "react";
import {TodoList} from "./components/Todo" 

class App extends Component{
  render(){
    return<div>
      <h3>Todo Application</h3>
      <TodoList/>
    </div>
  }
}

export default App