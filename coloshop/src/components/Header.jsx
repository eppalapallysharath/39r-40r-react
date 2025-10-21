import React from "react";
import TopNavbar from "./Top-Navbar"
import Navbar from "./Nav"

class Header extends React.Component{
    render(){
        return <>
           <TopNavbar/>
           <Navbar/>
        </>
    }
}

export default Header;