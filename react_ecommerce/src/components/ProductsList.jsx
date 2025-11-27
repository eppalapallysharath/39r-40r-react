import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Container, Spinner,Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../contextApi/ContextApi";

export const ProductsList = () => {
  const [productData, setProductData] = useState([]);
    const {setCart, cart} = useContext(CartContext)
  function fetchProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) =>{
    const check = cart.some(v => v.id === product.id)
    if(check){
        alert("already added in cart")
    }else{
        setCart([product, ...cart])
    }
  }

  return (
    <div>
      <div>
        {productData.length > 0 ? <Container>
            <Row>
                {productData.map(product=> <Col>
                    <Card key={product.id} style={{ width:"15rem" }}>
                    <Card.Header>
                        <Card.Img src={product.image} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.category}</Card.Text>
                        <Card.Text>Price ${product.price}</Card.Text>
                        <Button onClick={()=>addToCart(product)}>Add to cart</Button>
                    </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </Container>: <div className="text-center"> <span><Spinner animation="border" /> Loading.... </span>  </div> }
        {/* <Card style={{ width:"10rem" }}>
          <Card.Header>
            <Card.Img src=''/>
          </Card.Header>
          <Card.Body>
            <Card.Title>product name</Card.Title>
          </Card.Body>
        </Card> */}
      </div>
    </div>
  );
};
