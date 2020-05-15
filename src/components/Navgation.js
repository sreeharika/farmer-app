import React from "react";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#007bff" }}
      >
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          FarmerBid App{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive￼￼-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="Farmerhome" style={{ color: "white" }}>
              Products
            </Nav.Link>
            <Nav.Link href="/Bidhistory" style={{ color: "white" }}>
              Bid History
            </Nav.Link>
            <Nav.Link as={Link} to="Addproduct" style={{ color: "white" }}>
              Add Product
            </Nav.Link>
            <NavDropdown
              title="Product categories"
              style={{ color: "white" }}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#">Vegitables</NavDropdown.Item>
              <NavDropdown.Item href="#">Fruits</NavDropdown.Item>
              <NavDropdown.Item href="#">Pluses</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Bidprice" style={{ color: "white" }}>
              Bidprice
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "white" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navigation;
