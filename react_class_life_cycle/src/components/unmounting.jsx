import {Component} from "react"
import axios from "axios"

export class DemoUnmounting extends Component{
    constructor(){
        super()
        this.state = {greeting: ""}
    }
    componentDidMount(){
       this.time = setInterval(()=>{console.log("hello")},2000)
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => console.log(res.data))
        .catch(err => console.log(err))
    }
    componentWillUnmount(){
        console.log("unmounting")
        clearInterval(this.time)
        this.setState({greeting:""})
        axios.isCancel(true)
    }
    message = () =>{
        this.setState({greeting:"good morning"})
    }
    render(){
        return <div>
            <p>unmounting demo</p>
            <button onClick={this.message}>greet</button>
            <p>{this.state.greeting}</p>
        </div>
    }
}