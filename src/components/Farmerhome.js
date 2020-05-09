import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Addproduct from "./Addproduct";
import Dropdown from "react-bootstrap/Dropdown";
import "./custom.css";

export default class Farmerhome extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: "#007bff" }}
        >
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Farmer BidMarket
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Bid History
              </Nav.Link>
              <Nav.Link href="/Addproduct" style={{ color: "white" }}>
                Add Product
              </Nav.Link>
              <NavDropdown
                title="Product categories"
                id="collasible-nav-dropdown"
                className=".navbar-light .navbar-nav .nav-link "
              >
                <NavDropdown.Item href="#action/3.1">
                  Vegitables
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fruits</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pluses</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Myproducts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Bidhistory
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey={2} href="#memes" style={{ color: "white" }}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
