import { Component } from "react";
import "./theme.css"
import {Handbrake} from "./handbrake"

export class Cars extends  Component {
    constructor(){
        super();
        this.state = {carStarted:true, dark:true}
    }

    stopCar = () =>{
        this.setState({carStarted : false})
    }

    startCar = () =>{
        this.setState({carStarted:true})
    }

    darktheme = () =>{
        this.setState({dark:!this.state.dark})
    }

    render(){
        return <div style={{ backgroundColor:this.state.carStarted ? "green" :"red", textAlign:this.state.carStarted ? "center" :"left"}}>
            <h1> Cars </h1>
            {this.state.carStarted ?  <p>car is started and moving on road</p> : <p>Car stopped on the road</p>}
            {this.state.carStarted ? <button onClick={this.stopCar}>car stop</button> : <button onClick={this.startCar} >car start</button>}
            <button style={{ backgroundColor:this.state.carStarted ? "yellow" :"black"}}>{this.state.carStarted ? "head lights on" : "head light off"}</button>
            <hr/>
            <div className={this.state.dark ? "dark" : "light" }>
            <button onClick={this.darktheme}>{this.state.dark ? "light" : "dark"}</button>
            </div>
            {this.state.carStarted === false && <Handbrake/>}

            <Bike bikeStarted={this.state.carStarted} />
            <h5 id={this.state.dark? "hdark":" hlight"} >hello</h5>
        </div>
    }
}

class Bike extends Component{

    render(){
      if(this.props.bikeStarted){
        return <p>bike is started</p>
      }
      else{
        return <p>bike stopped</p>
      }
    }
}