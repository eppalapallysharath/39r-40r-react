import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row,Nav,  Col, Accordion, Badge, Modal, Navbar, Image, Spinner, Form } from "react-bootstrap";
export const Demobootstrap = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    useEffect(
        ()=>{ 
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(pro=>setData(pro))
            .catch((er) =>console.log(er))
        },
        []
    )

    const spin = () =>{
        setModal(!modal)
    }

    const openModal = () =>{
        setModal(true)
    }

    const closeModal = () =>{
        setModal(false)
    }

  return (
    <div>
         <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >
            <Image src="https://www.pngall.com/wp-content/uploads/15/React-Logo-PNG-HD-Image.png" width={ "100px" }/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <div>
            <p className="text-danger xs text-success md">hi</p>
        </div>


       <Button variant="danger" onClick={spin}> {modal ? "hide data" : "show data"} </Button>
       { modal ? <p>data</p>: 
    <Spinner animation="grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}

        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="password" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

        {/* <Accordion>
            <Accordion.Item>
                <Accordion.Header>
                    What is the meaning of in hoc?
                </Accordion.Header>
                <Accordion.Body>
                    <p>
                        A  <b>higher-order component (HOC)</b> is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button variant="danger" onClick={openModal}> Exit </Button>

        <Modal show={modal} onHide={closeModal}>
            <Modal.Header closeButton>
                Are you want close this?
            </Modal.Header>
            <Modal.Body>
                <Button variant="success" >save and exit</Button>
                <Button variant="warning" >cancel</Button>
            </Modal.Body>
        </Modal>
        <div>
            <p>Car quantity <Badge pill bg="warning">5</Badge> </p>
        </div> */}

    {/* <Container>
        <Row className="justify-content-center mx-2 gap-2">
            {data.map(val => <Col >
                <Card key={val.id} style={{ width:"14rem", height:"25rem" }} >
                    <Card.Img  src={val.image}/>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>Price $ {val.price} </Card.Text>
                    <Button variant="success"  className="btn btn-outline-light">view</Button>
                </Card>
            </Col>)}
        </Row>
    </Container>


      <div className="d-flex justify-content-center gap-5">
        <Card style={{ width: "13rem" }}>
          <Card.Img
            src="https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg"
            className="px-1 py2"
          />
          <Card.Text>
            Nothing Phone (3a) Black 128GB 8GB RAMNothing Phone (3a) Black 128GB
            8GB RAM
          </Card.Text>
          <Card.Title>₹23,040 M.R.P: ₹27,999.00</Card.Title>
          <Button className="w-75 mt-4 mb-2 ">add to cart</Button>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img
            src="https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg"
            className="px-1 py2"
          />
          <Card.Text>
            Nothing Phone (3a) Black 128GB 8GB RAMNothing Phone (3a) Black 128GB
            8GB RAM
          </Card.Text>
          <Card.Title>₹23,040 M.R.P: ₹27,999.00</Card.Title>
          <Button className="w-75 mt-4 mb-2 ">add to cart</Button>
        </Card>
      </div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "13rem" }}>
              <Card.Img
                src="https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg"
                className="px-1 py2"
              />
              <Card.Text>
                Nothing Phone (3a) Black 128GB 8GB RAMNothing Phone (3a) Black
                128GB 8GB RAM
              </Card.Text>
              <Card.Title>₹23,040 M.R.P: ₹27,999.00</Card.Title>
              <Button className="w-75 mt-4 mb-2 ">add to cart</Button>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: "13rem" }}>
              <Card.Img
                src="https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg"
                className="px-1 py2"
              />
              <Card.Text>
                Nothing Phone (3a) Black 128GB 8GB RAMNothing Phone (3a) Black
                128GB 8GB RAM
              </Card.Text>
              <Card.Title>₹23,040 M.R.P: ₹27,999.00</Card.Title>
              <Button className="w-75 mt-4 mb-2 ">add to cart</Button>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "13rem" }}>
              <Card.Img
                src="https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg"
                className="px-1 py2"
              />
              <Card.Text>
                Nothing Phone (3a) Black 128GB 8GB RAMNothing Phone (3a) Black
                128GB 8GB RAM
              </Card.Text>
              <Card.Title>₹23,040 M.R.P: ₹27,999.00</Card.Title>
              <Button className="w-75 mt-4 mb-2 ">add to cart</Button>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: "13rem" }}>
              <Card.Img
                src="https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg"
                className="px-1 py2"
              />
              <Card.Text>
                Nothing Phone (3a) Black 128GB 8GB RAMNothing Phone (3a) Black
                128GB 8GB RAM
              </Card.Text>
              <Card.Title>₹23,040 M.R.P: ₹27,999.00</Card.Title>
              <Button className="w-75 mt-4 mb-2 ">add to cart</Button>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: "13rem" }}>
              <Card.Img
                src="https://m.media-amazon.com/images/I/31Q212fG-WL._SY300_SX300_QL70_FMwebp_.jpg"
                className="px-1 py2"
              />
              <Card.Text>
                Nothing Phone (3a) Black 128GB 8GB RAMNothing Phone (3a) Black
                128GB 8GB RAM
              </Card.Text>
              <Card.Title>₹23,040 M.R.P: ₹27,999.00</Card.Title>
              <Button className="w-75 mt-4 mb-2 ">add to cart</Button>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Demobootstrap;
