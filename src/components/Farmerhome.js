import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Card, Button } from 'react-bootstrap';
import store from "../configureStore";
import Navigation from "./Navgation"

export default class Farmerhome extends Component {
  renderProducts = ()=>{
    let storecp = store.getState()
    console.log(storecp.auth.products)
    if (storecp.auth.products.length > 0) {
      const listItems = storecp.auth.products.map((product) =>
      {
        let imgPath
        if (!product.croptype) {
          imgPath = `./tomato.png`
        }else{
          imgPath = `./${product.croptype.toString().replace(" ", "_").toLowerCase()}.png`
        }
        let viewdetailsPath = `/Viewdetails/${product.id}`
        console.log(product)
        // debugger
        return <div key={product.id}>
          <li >
          <Card style={{ width: '80rem' }}>
          <Card.Body>
            <Card.Title>{product.croptype}</Card.Title>
            <Card.Img variant="right" className='card_img' src={imgPath} />
            <Button variant="primary" className='btn'>
              <Link style={{color:'white'}} to={viewdetailsPath}> View details</Link>
            </Button>
          </Card.Body>
          </Card>
          </li>
          <br />
        </div>
      }
    );
    return listItems  
    } else {
      return "Please add products"
    }

  }
    render() {
        return (
          <div>
            <Navigation></Navigation>
              <ol>
                <this.renderProducts></this.renderProducts>
              </ol>
           </div>
        )
    }
}

  // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            // <Navbar.Brand href="#home">FarmerBid App </Navbar.Brand>
            // <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            // <Navbar.Collapse id="responsive￼￼-navbar-nav">
            //   <Nav className="mr-auto">
            //     <Nav.Link as={Link} to="Farmerhome">Products</Nav.Link>
            //     <Nav.Link href="#pricing">Bid History</Nav.Link>
            //     <Nav.Link as={Link} to="Addproduct">Add Product</Nav.Link>
            //     <NavDropdown title="Product categories" id="collasible-nav-dropdown">
            //       <NavDropdown.Item href="#">Vegitables</NavDropdown.Item>
            //       <NavDropdown.Item href="#">Fruits</NavDropdown.Item>
            //       <NavDropdown.Item href="#">Pluses</NavDropdown.Item>
            //     </NavDropdown>
            //   </Nav>
            //   <Nav>
            //   <Nav.Link href="/login">Logout</Nav.Link>
            //   </Nav>
            // </Navbar.Collapse>
            // </Navbar>
