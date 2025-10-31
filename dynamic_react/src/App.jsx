import { Component } from "react";
import {EventsComp} from "./components/Dynmic"
import {Dynmic2Comp, Calculator} from "./components/dynamic2"

class App extends Component {
  render(){
    return <>
      <h1>App component</h1>
      <Dynmic2Comp/>
      <Calculator/>
      {/* <EventsComp/> */}
    </>
  }
}

export default App