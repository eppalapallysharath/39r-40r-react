import { Component } from "react";
import "./productslist.css"
export class ProductList extends Component {
    
    render(){
        
        return <div className="main-container">
            <p>{this.props.productTitle}</p>
            <div className="products-list-container">
                {this.props.data.map((item,index)=>
                    <div className="product-card" key={index}>
                        <img src={item.image}/>
                        <p>{item.title}</p>
                        <p>price starts from {item.price}</p>
                    </div>
                )}
            </div>
        </div>
    }
}