import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
// import { Router, Route, Link } from 'react-router'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Card, Button } from 'react-bootstrap';
import download from './images/download.jpeg';
import toordal from './images/toordal.jpg';
import store from "../configureStore";

export default class Farmerhome extends Component {
  renderProducts = ()=>{
    let storecp = store.getState()
    console.log(storecp.auth.products)
    const listItems = storecp.auth.products.map((product) =>
      {
        let imgPath
        if (!product.croptype) {
          imgPath = `./tomato.png`
        }else{
          imgPath = `./${product.croptype.toString().replace(" ", "_").toLowerCase()}.png`
        }
        
        return <div>
          <li>
          <Card style={{ width: '80rem' }}>
          <Card.Body>
            <Card.Title>{product.croptype}</Card.Title>
            <Card.Img variant="right" className='card_img' src={imgPath} />
            <Button variant="primary" className='btn'>
              <Link style={{color:'white'}} to="/Viewdetails"> View details</Link>
            </Button>
            <Button variant="primary" className='card_btn'>
              <Link style={{color:'white'}} to="/Yourbids"> Your bids</Link>
            </Button>
          </Card.Body>
          </Card>
          </li>
          <br />
        </div>
        
      }
    );
    return listItems
  }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Farmer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Bid History</Nav.Link>
      <Nav.Link as={Link} to="Addproduct">Add Product</Nav.Link>
      <NavDropdown title="Product categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vegitables</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Fruits</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pluses</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link href="/login">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<ol>

<this.renderProducts></this.renderProducts>
</ol>
    </div>
        )
    }
}
