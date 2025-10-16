import Navbar from "./components/Navbar"
import Footer from "./components/class components/footer"
import Banner from "./components/class components/Banner"
import Explore from "./components/Explore"
import Card from "./components/class components/Card"

function App (){
    return <div>
          <Navbar/>
            <Banner></Banner>
            <Banner/>
            <Explore/>
            <Card/>
        {/* <h2>hi</h2> */}
        <Footer/>
    </div>
}

export default App;
