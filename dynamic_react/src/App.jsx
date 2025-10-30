import { Component } from "react";
import {EventsComp} from "./components/Dynmic"

class App extends Component {
  render(){
    return <>
      <h1>App component</h1>
      <EventsComp/>
    </>
  }
}

export default App