import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      phone: "",
      value: "",
    };
  }
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handlesubmit = (event) => {
    alert(`my name is ${this.state.fullname}. 
      My email id is ${this.state.email}.
      My mobile number is ${this.state.phone}.
      My select type is ${this.state.value}.
     `);

    //console.log(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ backgroundColor: "light grey" }}>
        <form onSubmit={this.handlesubmit}>
          <div>
            <h1>Register</h1>
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
            name="fullname"
            value={this.state.fullname}
            onChange={this.handlechange}
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
            name="email"
            value={this.state.email}
            onChange={this.handlechange}
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
            name="phone"
            value={this.state.phone}
            onChange={this.handlechange}
            style={{
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />{" "}
          <br />
          <br></br>
          <div style={{ paddingRight: "297px" }}>
            <label style={{ color: "black", paddingRight: "45px" }}>
              Select:
            </label>
            {""}
            <select
              value={this.state.value}
              onChange={this.handleChange}
              style={{
                backgroundColor: "#007bff",
                borderRadius: "5px",
                width: "102px",
                height: "30px",
                color: "white",
                paddingLeft: "10px",
                paddingRight: "25px",
                border: "1px solid #ced4da",
              }}
            >
              <option value="farmer">farmer</option>
              <option value="bidder">bidder</option>
            </select>
          </div>
          <br />
          <br />
          <br></br>
          <input
            type="submit"
            value="Submit"
            style={{
              color: "white",
              backgroundColor: "#007bff",
              borderRadius: "5px",
              width: "510px",
              height: "35px",
              border: "1px solid #ced4da",
            }}
          />
        </form>
        <ul className="nav-item" style={{ paddingLeft: "460px" }}>
          <Link className="nav-link" to={"/Login"}>
            Login
          </Link>
        </ul>
      </div>
    );
  }
}
