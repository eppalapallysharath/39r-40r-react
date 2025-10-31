import { Component } from "react";
export class Dynmic2Comp extends Component {
    constructor(){
        super();
        this.state = {  count:10 }
        this.restbtn = this.rest.bind(this)
    }

    rest(){
        this.setState({count:0})
    }

    increment(){
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count :this.state.count - 1})
    }

    render(){
        return <div>
            <h2>Dynamic component</h2>
            <h3>count {this.state.count}</h3>
            <button onClick={()=>this.increment()}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.restbtn}>rest 0</button>
        </div>
    }
}

export class Calculator extends Component{
    constructor(){
        super()
        this.state = { inputbox1:0, inputbox2:0, sum:0, background:"white", color:"black" }
    }

    input1(e){
       this.setState({inputbox1: e.target.value})
    }

    input2(e){
        this.setState({inputbox2:e.target.value})
    }

    sum(){
        // this.setState({sum: Number( this.state.inputbox1) + Number(this.state.inputbox2)})
      this.setState({sum:  (this.state.inputbox1 * 1)+ (this.state.inputbox2 * 1)})
    }

    lightTheme(){
        this.setState({background:"white", color:"black"})
    }

    darkTheme(){
        this.setState({background:"black", color:"white"})
    }

    render(){
     
        return <div style={{backgroundColor:this.state.background, color:this.state.color  }}>
            <h1>Calculate sum of two number</h1>
            <input type="number" onChange={(e)=>this.input1(e)} />
            <input type="number" onChange={(e)=>this.input2(e)}/>
            <button onClick={()=>this.sum()}>calculate sum of two number</button>
            <p>sum of two values {this.state.sum}</p>
            <button onClick={()=>this.lightTheme()}>light</button>
            <button onClick={()=> this.darkTheme()}>dark</button>
        </div>
    }
}