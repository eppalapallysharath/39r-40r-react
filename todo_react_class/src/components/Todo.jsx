import { Component } from "react";

export class TodoList extends Component {
  constructor() {
    super();
    this.state = { inputTodo: "", todos: [], editIndex:null };
  }

  handleInput(e) {
    this.setState({ inputTodo: e.target.value });
  }
  
  handleAddTodo() {
    // this.state.todos.push(this.state.inputTodo)
    // this.setState({todos:this.state.todos})
    if(this.state.inputTodo.length > 0){
        this.setState({ todos: [...this.state.todos, this.state.inputTodo] , inputTodo:"" });
        
    }
  }

  componentDidUpdate(prevprops, prevstates){
    if(prevstates.todos.length !== this.state.todos.length){
        const newTodo =  this.state.todos
        localStorage.setItem("todos", JSON.stringify(newTodo))
    }else if(prevstates.editIndex !== this.state.editIndex){
          const newTodo =  this.state.todos
        localStorage.setItem("todos", JSON.stringify(newTodo))
    }  
}

  handleEdit(index){
    this.setState({editIndex:index, inputTodo: this.state.todos[index] })
  }

  handleUpdate(){
    this.state.todos.splice(this.state.editIndex, 1, this.state.inputTodo)
    this.setState({todos:this.state.todos, inputTodo: "", editIndex:null})
  }

  handleDelete(index){
    this.setState({todos:this.state.todos.filter((ele, i)=> index !== i )})
  }

  componentDidMount(){
    const data = localStorage.getItem("todos")
    this.setState({todos: JSON.parse(data) || []})
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <p>Todo list</p>
        <div>
          <input type="text" onChange={(e) => this.handleInput(e)} value={this.state.inputTodo} />
          {this.state.editIndex===null ? <button onClick={() => this.handleAddTodo()}>Add</button> :  <button onClick={()=>this.handleUpdate()}>Update</button>}        
        </div>
        <div>
          {this.state.todos.length > 0 ? (
            this.state.todos.map((ele, index) => (
              <p key={index}>
                {ele} <button onClick={()=>this.handleEdit(index)}>Edit</button> <button onClick={()=>this.handleDelete(index)}>Delete</button>
              </p>
            ))
          ) : (
            <p>You have todo tasks</p>
          )}
        </div>
      </div>
    );
  }
}
