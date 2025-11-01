import { Component } from "react";

export class Messages  extends Component {
    
    render(){
        return<>
            <p>{this.props.msg}</p>
        </>
    }
}