import React from "react";
import Header from "./components/Header"
import Banner from "./components/Banner"

class App extends React.Component{
    render(){
        return <React.Fragment>
          <Header/>
          <Banner/>
        </React.Fragment>
    }
}

export default App