import React from 'react';
import {Container,Navbar,Nav,NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation(){
    return(
<div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">FarmerBid App </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive￼￼-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="Farmerhome">Products</Nav.Link>
                <Nav.Link href="#pricing">Bid History</Nav.Link>
                <Nav.Link as={Link} to="Addproduct">Add Product</Nav.Link>
                <NavDropdown title="Product categories" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">Vegitables</NavDropdown.Item>
                  <NavDropdown.Item href="#">Fruits</NavDropdown.Item>
                  <NavDropdown.Item href="#">Pluses</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              <Nav.Link href="/login">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
            )
        }
export default Navigation;