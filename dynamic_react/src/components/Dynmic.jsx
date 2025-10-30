import { Component } from "react";

export class EventsComp extends Component {
    constructor(){
        super()
     this.greet = this.changeGreetings.bind(this) 
     this.state = {
        greeting:"good morning",
        inputTag:"",
        submittedValue:""
     }
    //  console.log(this)
    //  this.morning = this.goodMorning.bind(this)
    //  this.input = this.inputChange.bind(this)
    //  this.inputClick = this.inputsubmit.bind(this)
    }

    changeGreetings(){
        console.log("clicked")
        this.setState({greeting:"hello good afternoon"})
        
    }

    // goodMorning(){
    //     this.setState({greeting:"good morning"})
    // }
    // inputsubmit(){
    //     this.setState({submittedValue:this.state.inputTag})
    // }

    // inputChange(e){
    //    this.setState({inputTag: e.target.value})
    // }

   

    

    render(){
        return <div>
            <p>Events</p>
            <h5>{this.state.greeting}</h5>
            <button onClick={this.greet}>say good afternoon</button>
            {/* <button onClick={this.morning} > say good morning</button>
            <hr/>
            <input type="text" placeholder="enter something...." onChange={this.input}/>
            <p>{this.state.submittedValue}</p>
            <button onClick={this.inputClick}>enter</button> */}
        </div>
    }
}