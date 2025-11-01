import { Component } from "react";
import {Messages} from "./Components/messages"
import {ProductList} from "./Components/productList"
import bestProductsData from "./assets/data/bestProducts.json"
import productsData from "./assets/data/produccts.json"

class App extends Component {

  render(){
    return <>
      <h1>App</h1>
      <Messages msg="good morning"/>
      <Messages msg="good afternoon"/>
      <ProductList data={bestProductsData} productTitle="Best products for deal"/>
      <ProductList data={productsData} productTitle="Top products"/>
    </>
  }
}

export default App