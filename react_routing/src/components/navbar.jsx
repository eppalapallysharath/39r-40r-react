import { NavLink } from "react-router-dom"
export const Navbar = () =>{
    return <nav>
        <ul>
            <NavLink to='/home'> <li>Home</li> </NavLink>
            <NavLink to="/login"><li >login</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink> 
            <NavLink to="/signup"><li>signup</li></NavLink>
        </ul>
    </nav>
}