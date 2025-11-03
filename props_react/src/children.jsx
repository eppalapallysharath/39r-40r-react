import { Component } from "react";

export class Child1 extends Component{
    render(){
        console.log(this.props)
        return <div>
            <p>child1 component</p>
            <h2>name {this.props.name}</h2>
            {this.props.children}
        </div>
    }
}