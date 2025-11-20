import {Routes, Route} from "react-router-dom"
import {LandingPage} from "./pages/landingpage"
import {Home} from "./pages/homepage"
import {ContactUs} from "./contact"
import { PageNotFound } from "./pages/pagenotfound"
import {Login} from "./pages/login"
import {Navbar} from "./components/navbar"
import { Dashboard } from "./pages/dashboard"
import {UserList} from "./pages/usersList"
import {User} from "./pages/user"
import { Product } from "./pages/product"
function App() {
  return <>
   <Navbar/>
    <Routes>
      <Route path="/"  element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>}  />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/dashboard" element ={<Dashboard/>} />
      <Route path="/usersList" element={<UserList/>} />
      <Route path="/user/:name/:id" element={<User/>} />
      <Route path="/product/:id" element={<Product/>} />
    </Routes>
   
  </>
}
export default App;