import React from "react"
import {MessagesComponent, func} from "./components/Messages"
import {MediaFiles} from "./components/Media"
import {reverse} from "./day1"
export const name = "sharath"

const App = () =>{
    console.log(reverse())
    return <>
        <p>App components</p>
        <MessagesComponent/>
        <MediaFiles/>
    </>
}
export default App

export class Helloworld extends React.Component{

    render(){
        return<div>
            {func()}
            <h2>Hello world</h2>
        </div>
    }
}
