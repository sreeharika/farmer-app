import React, { Component } from "react";
import { Link } from "react-router-dom";
import tomato from "./images/tomato.png";
import { Card, Button } from "react-bootstrap";
import Navigation from "./Navgation";

export default class Bidhistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handlesubmit = (event) => {
    alert(`confirmation msg sent to bidder mobile
      
     `);

    event.preventDefault();
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Navigation></Navigation>
        <h4>Tomato details</h4>
        <Card.Img
          variant="right"
          className="card_img"
          src={tomato}
          style={{
            width: "600px",
            height: "300px",
            paddingRight: "50px",
          }}
        />
        <h6>
          posted by: <p style={{ color: "blue" }}>mamatha on fri may 15 2020</p>
        </h6>

        <h5 style={{ display: "inline" }}>crop type : </h5>
        <p style={{ display: "inline" }}>tomato</p>
        <div>
          <h5 style={{ display: "inline" }}>Title : </h5>
          <p style={{ display: "inline" }}>veg</p>
        </div>
        <div>
          <h5 style={{ display: "inline" }}>Name : </h5>
          <p style={{ display: "inline" }}>mamatha</p>
        </div>
        <div>
          <h5 style={{ display: "inline" }}>Contact : </h5>
          <p style={{ display: "inline" }}>9000000000</p>
        </div>
        <div>
          <h5 style={{ display: "inline" }}>Weight : </h5>
          <p style={{ display: "inline" }}>50kg</p>
        </div>
        <div>
          <h5 style={{ display: "inline" }}>Price : </h5>
          <p style={{ display: "inline" }}>50,000</p>
        </div>
        <div>
          <h5 style={{ display: "inline" }}>Location : </h5>
          <p style={{ display: "inline" }}>adilabad</p>
        </div>
        <br></br>
        <Card className=".card">
          <div style={{ borderStyle: "5px solid red" }}>
            <div>
              <h5 style={{ display: "inline" }}>Bidder Name : </h5>
              <p style={{ display: "inline" }}>Harika</p>
            </div>
            <div>
              <h5 style={{ display: "inline" }}>Bidder price : </h5>
              <p style={{ display: "inline" }}>55000</p>
            </div>
            <div>
              <h5 style={{ display: "inline" }}>Bidder Number : </h5>
              <p style={{ display: "inline" }}>900000001</p>
            </div>
          </div>
        </Card>
        <input
          type="submit"
          value="confirm"
          onClick={this.handlesubmit}
          style={{
            color: "white",
            backgroundColor: "#007bff",
            borderRadius: "5px",
            width: "80px",
            height: "35px",
            border: "1px solid #ced4da",
          }}
        />
        <br></br>
        <br></br>
        <Card className=".card">
          <div style={{ borderStyle: "5px solid red" }}>
            <div>
              <h5 style={{ display: "inline" }}>Bidder Name : </h5>
              <p style={{ display: "inline" }}>venkatesh</p>
            </div>

            <div>
              <h5 style={{ display: "inline" }}>Bidder price : </h5>
              <p style={{ display: "inline" }}>53000</p>
            </div>
            <div>
              <h5 style={{ display: "inline" }}>Bidder Number : </h5>
              <p style={{ display: "inline" }}>9491358851</p>
            </div>
          </div>
        </Card>
        <input
          type="submit"
          value="confirm"
          onClick={this.handlesubmit}
          style={{
            color: "white",
            backgroundColor: "#007bff",
            borderRadius: "5px",
            width: "80px",
            height: "35px",
            border: "1px solid #ced4da",
          }}
        />
        <br></br>
        <br></br>
        <Card className=".card">
          <div style={{ borderStyle: "5px solid red" }}>
            <div>
              <h5 style={{ display: "inline" }}>Bidder Name : </h5>
              <p style={{ display: "inline" }}>vara prasad</p>
            </div>
            <div>
              <h5 style={{ display: "inline" }}>Bidder price : </h5>
              <p style={{ display: "inline" }}>54000</p>
            </div>
            <div>
              <h5 style={{ display: "inline" }}>Bidder Number : </h5>
              <p style={{ display: "inline" }}>9491358851</p>
            </div>
          </div>
        </Card>
        <input
          type="submit"
          value="confirm"
          onClick={this.handlesubmit}
          style={{
            color: "white",
            backgroundColor: "#007bff",
            borderRadius: "5px",
            width: "80px",
            height: "35px",
            border: "1px solid #ced4da",
          }}
        />
        <br></br>
        <br></br>
        <ul className="nav-item" style={{ paddingLeft: "460px" }}>
          <Link className="nav-link" to={"/Farmerhome"}>
            back
          </Link>
        </ul>
      </div>
    );
  }
}
