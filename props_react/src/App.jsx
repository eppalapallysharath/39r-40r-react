import { Component } from "react";
import {Messages} from "./Components/messages"
import {ProductList} from "./Components/productList"
import bestProductsData from "./assets/data/bestProducts.json"
import productsData from "./assets/data/produccts.json"
import {Child1} from "./children"

class App extends Component {

  render(){
    return <>
      <h1>App</h1>
      <Child1 name="sharath"/>
      <Child1 name="tom"><div><h3 style={{ color:"tomato" }}>good morning</h3></div></Child1>
      {/* <Messages msg="good morning"/>
      <Messages msg="good afternoon"/>
      <ProductList data={bestProductsData} productTitle="Best products for deal"/>
      <ProductList data={productsData} productTitle="Top products"/> */}
    </>
  }
}

export default App