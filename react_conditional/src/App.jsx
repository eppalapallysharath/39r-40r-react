import { Component } from "react";

class App extends Component {
  constructor (){
    super();
    this.state = {count:1, dark : true}
  }
  login = true
  render(){
    if(this.state.count === 0){
      return <>
        <h5>your count no is 0</h5>
      </>
    }else if(this.login){
      return <h1>welcome  user</h1>
    }

    else if(this.state.dark === true){
      return <div style={{ background:"black", color:"white" }}>
        <h2>dark mode</h2>
      </div>
    }
    else{
      return <div>
        <h3>your count is greater than 0</h3>
      </div>
    }
  }
}

export default App