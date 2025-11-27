import React,{useContext} from 'react'
import { Navbar, Container, Nav, Image, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from "../assets/Gemini_Generated_Image_48u43u48u43u48u4.png"
import { CartContext } from '../contextApi/ContextApi'

export const NavBar = () => {
  const {cart} = useContext(CartContext)
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand >
            <Image src={logo}  width={"60px"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <NavLink to="/">Home</NavLink>
          </Nav>
           <NavLink to="/cart">Cart<sup><Badge>{cart.length}</Badge></sup></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
