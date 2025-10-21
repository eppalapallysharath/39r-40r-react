import "./Topnavbar.css"

const TopNavbar = () =>{
    const price = 50
    return <nav style={{ backgroundColor:"#1e1e27", height:"50px", color:"beige", display:"flex", justifyContent:"space-around"}}>
       <div>
        <p>FREE SHIPPING ON ALL U.S ORDERS OVER ${price}</p>
       </div>
       
       <div className="top-navbar-container2">
        <p>USD</p>
        <p>English</p>
        <p>My Account</p>
       </div>
    </nav>
}

export default TopNavbar