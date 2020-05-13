import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navgation";

export default class Bidprice extends React.Component {
    state = {
      fullname: "",
      email: "",
      phone: "",
      price: "",
    };
  
  handlechangeFullname = (event) => {
    this.setState({ 
        fullname:event.target.value });
  };
  handleChangeEmail = (event) => {
    this.setState({ 
        email: event.target.value });
  };
  handleChangePhone = (event) => {
    this.setState({ 
        phone: event.target.value });
  };
  handleChangePrice = (event) => {
    this.setState({
         price: event.target.value });
  };
  handlesubmit = (event) => {
    alert(`my name is ${this.state.fullname}. 
      My email id is ${this.state.email}.
      My mobile number is ${this.state.phone}.
      My Bid price is ${this.state.price}.
     `);
    event.preventDefault();
  };

  render() {
    const { fullname, email, phone, price } = this.state;
    return (
      <div style={{ backgroundColor: "light grey",textAlign:"center" }}>
      <Navigation></Navigation>
        <form onSubmit={this.handlesubmit}>
          <div>
            <br></br>
            <br></br>
            <h1>Bid Price</h1>
          </div>
          <br></br>
          <label
            style={{
              color: "black",
              paddingRight: "50px",
            }}
          >
            Name
          </label>
          <input
            type="text"
            onChange={this.handlechangeFullname}
            style={{
              // borderColor: "#0062cc",
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />{" "}
          <br />
          <br></br>
          <label style={{ color: "black", paddingRight: "54px" }}>Email</label>
          <input
            type="email"
            onChange={this.handleChangeEmail}
            style={{
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />{" "}
          <br />
          <br></br>
          <label style={{ color: "black", paddingRight: "45px" }}>
            Mobile{" "}
          </label>
          <input
            type="number"
            onChange={this.handleChangePhone}
            style={{
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />{" "}
          <br />
          <br></br>
          <label style={{ color: "black", paddingRight: "50px" }}>
            Price :
          </label>
          {""}
          <input
            type="number"
            onChange={this.handleChangePrice}
            style={{
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />
          <br />
          <br />
          <br></br>
          <input
            type="submit"
            value="Submit My Bid"
            href="/Farmerhome"
            style={{
              color: "white",
              backgroundColor: "#007bff",
              borderRadius: "5px",
              width: "510px",
              height: "35px",
              border: "1px solid #ced4da",
            }}
          />
          <p className="back text-center">
          Back<Link to={"/Farmerhome"}>Here</Link>
      </p>
        </form>
               
      </div>
    );}
}   