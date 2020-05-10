import React, { Component } from "react";

export default class register extends Component {
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
      <div>
        <form onSubmit={this.handlesubmit}>
          <label> fullname </label>
          <br />
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handlechange}
            style={{
              // borderColor: "#0062CC",
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #CED4DA",
            }}
          />{" "}
          <br />
          <label> Email </label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handlechange}
          />{" "}
          <br />
          <label> Mobile </label>
          <br />
          <input
            type="number"
            name="phone"
            value={this.state.phone}
            onChange={this.handlechange}
          />{" "}
          <br />
          <br />

          <label>Pick type:
            <select value={this.state.value} onChange={this.handleChange}
            style={{
              backgroundColor: "#007BFF",
              borderRadius: "5px",
              width: "135px",
              height: "30px",
              color: "white",
              paddingLeft: "10px",
              paddingRight: "25px",
              border: "1px solid #CED4DA",
            }}>
              <option value="farmer">farmer</option>
              <option value="bidder">bidder</option>
            </select>
          </label>
          <br />
          <br />
          <input type="submit" value="Submit"
          style={{
            color: "white",
            backgroundColor: "#007BFF",
            borderRadius: "5px",
            width: "510px",
            height: "35px",
            border: "1px solid #CED4DA",
          }} />
        </form>
      </div>
    );
  }
}