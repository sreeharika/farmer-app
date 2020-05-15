import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { productinfo } from "../actions";
import { connect } from "react-redux";
// import {getStore} from "./configureStore";
import store from "../configureStore";
import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navgation";

class Addproduct extends Component {
  state = {
    name: "",
    croptype: "",
    weight: "",
    price: "",
    selectlocation: "",
    files: null,
    startDate: new Date(),
    redirectToReferrer: false,
  };

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeCroptype = (event) => {
    this.setState({
      croptype: event.target.value,
    });
  };
  handleChangeWeight = (event) => {
    this.setState({
      weight: event.target.value,
    });
  };
  handleChangePrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };
  handleChangeSelectlocation = (event) => {
    this.setState({
      selectlocation: event.target.value,
    });
  };
  // choose file event
  handleChangefiles = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      files: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleupload = (event) => {
    console.log("fileuplaoded:");
  };
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //setting state for any change
  handleChangeDate = (date) => {
    console.log("date selected: ", date);
    this.setState({
      startDate: date,
    });
  };

  // handleSubmit = () => {
  // const { dispatch } = this.props;
  // dispatch(productinfo(this.state.name, this.state.croptype));
  // }

<<<<<<< HEAD
  handlesubmit = (event) => {
    // debugger
    event.preventDefault();
    const { dispatch } = this.props;
    let product = {
      id: uuidv4(),
      name: this.state.name,
      croptype: this.state.croptype,
      weight: this.state.weight,
      price: this.state.price,
      selectlocation: this.state.selectlocation,
      files: this.state.files,
      startDate: this.state.startDate,
    };
    dispatch(productinfo(product));
    // this.onAction(this.state.name, this.state.croptype)
    // alert( `My name is ${this.state.name}.
    //         My crop type is ${this.state.croptype}.
    //         My weight is ${this.state.weight}.
    //         My price  is ${this.state.price}.
    //         My location type is ${this.state.selectlocation}.
    //         My selectfile is ${this.state.selectedFile}.
    //         My Bidend date is ${this.state.startDate}.
    //       `);
    let storecp = store.getState();
    console.log(storecp.auth.products);
    // debugger
    this.setState({ redirectToReferrer: true });
    //console.log(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
      return <Redirect to="/Farmerhome" />;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <Navigation></Navigation>
        <br></br>
        <h1>Add Product</h1>
        <form onSubmit={this.handlesubmit}>
          <label
            style={{
              color: "black",
              paddingRight: "50px",
            }}
          >
            Name:
            <input
              type="text"
              style={{
=======
    render()  {
      const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/Farmerhome" />
        }
        return (
          
            <div style={{textAlign:"center"}}>
            <Navigation></Navigation>
                <h1>Add product descrption</h1>
                <form onSubmit={this.handlesubmit}>
                <label style={{paddingRight:"40px",color:"black"}}>Name:
              <input type="text" style={{
>>>>>>> 5f691d0a1f4d9dc6aafa5f98c4578d5803b95131
                borderRadius: "5px",
                paddingLeft: "25px",
                width: "400px",
                border: "1px solid #CED4DA",
              }}
<<<<<<< HEAD
              onChange={this.handleChangeName}
            />
          </label>
          <br />
          <br></br>
          <div style={{ paddingRight: "200px" }} />
          <label
            style={{
              color: "black",
              paddingRight: "340px",
            }}
          >
            Crop type:
            <select
              value={this.state.value}
              onChange={this.handleChangeCroptype}
              style={{
                backgroundColor: "#007BFF",
                borderRadius: "5px",
                width: "135px",
                height: "30px",
                color: "white",
                paddingLeft: "10px",
                paddingRight: "25px",
                border: "1px solid #CED4DA",
              }}
            >
              <option value="tamato">Tomato</option>
              <option value="chilli">Chilli</option>
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="Mango">Mango</option>
              <option value="sapota">Sapota</option>
              <option value="Mosambi">Mosambi</option>
              <option value="Tur dal">Tur dal</option>
            </select>
          </label>
          <br />
          <br></br>
          <div style={{ paddingRight: "52px" }}>
            <label> Weight: </label>
            <input
              type="number"
              placeholder="weight in kgs/Tons"
              onChange={this.handleChangeWeight}
              style={{
                borderRadius: "5px",
                width: "400px",
                border: "1px solid #CED4DA",
              }}
            />{" "}
          </div>
          <br />
          <div style={{ paddingRight: "40px" }}>
            <label
=======
              onChange={this.handleChangeName} />
            </label>
              <br />
              <div style={{ paddingRight: "200px" }} />
              <label  style={{
                color: "black",
                paddingRight: "260px",
              }}>
                Crop type:
                <select value={this.state.value} onChange={this.handleChangeCroptype}
                style={{
                  backgroundColor: "#007BFF",
                  borderRadius: "5px",
                  width: "135px",
                  height: "30px",
                  color: "white",
                  paddingLeft: "10px",
                  paddingRight: "25px",
                  border: "1px solid #CED4DA",
                }}
                >
                  <option value="tamato">Tomato</option>
                  <option value="chilli">Chilli</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="Mango">Mango</option>
                  <option value="sapota">Sapota</option>
                  <option value="Mosambi">Mosambi</option>
                  <option value="Tur dal">Tur dal</option>
                </select>
              </label>
              <br />
              <label> Weight: </label>
              <input
                type="number"
                placeholder= "weight in kgs/Tons"
                onChange={this.handleChangeWeight}
                style={{
                  borderRadius: "5px",
                  width: "400px",
                  border: "1px solid #CED4DA",
                }}
              />{" "}
              <br />
              <label style={{
                color: "black",
                paddingRight: "50px",
              }}> Price: </label>
              <input
                type="number"
                placeholder= "Price in Rs"
                onChange={this.handleChangePrice}
                style={{
                  borderRadius: "5px",
                  width: "400px",
                  border: "1px solid #CED4DA",
                }}
              />{" "}
              <br />
              <br />
              <div style={{ paddingRight: "297px" }} />
              <label style={{
                color: "black",
                paddingRight: "260px",
              }}>
                Location:
                <select value={this.state.value} onChange={this.handleChangeSelectlocation}
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
                  <option value="hyderabad">Hyderabad</option>
                  <option value="adilabad">Adilabad</option>
                  <option value="bhadradri">Bhadradri</option>
                  <option value="jagtial">Jagtial</option>
                  <option value="kamareddy">Kamareddy</option>
                  <option value="karimnagar">Karimnagar</option>
                  <option value="khammam">Khammam</option>
                  <option value="medak">mMedak</option>
                  <option value="nirmal">Nirmal</option>
                  <option value="warangal">Warangal</option>
                  
                </select>
              </label>
              <br />
              <br />
              
              <label>Bid End Date:</label>
                    <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeDate}
            />
                    <br />
                    <br />
                    <label>Upload images:</label>
                    <input type='file' onChange={this.handleChangefiles} 
>>>>>>> 5f691d0a1f4d9dc6aafa5f98c4578d5803b95131
              style={{
                color: "black",
              }}
            >
              Price:
            </label>
            <input
              type="number"
              placeholder="Price in Rs"
              onChange={this.handleChangePrice}
              style={{
                borderRadius: "5px",
                width: "400px",
                border: "1px solid #CED4DA",
              }}
            />
          </div>

          <br />
          <div style={{ paddingRight: "297px" }} />
          <label
            style={{
              color: "black",
              paddingRight: "330px",
            }}
          >
            Location:
            <select
              value={this.state.value}
              onChange={this.handleChangeSelectlocation}
              style={{
                backgroundColor: "#007BFF",
                borderRadius: "5px",
                width: "135px",
                height: "30px",
                color: "white",
                paddingLeft: "10px",
                paddingRight: "25px",
<<<<<<< HEAD
                border: "1px solid #CED4DA",
              }}
            >
              <option value="hyderabad">Hyderabad</option>
              <option value="adilabad">Adilabad</option>
              <option value="bhadradri">Bhadradri</option>
              <option value="jagtial">Jagtial</option>
              <option value="kamareddy">Kamareddy</option>
              <option value="karimnagar">Karimnagar</option>
              <option value="khammam">Khammam</option>
              <option value="medak">mMedak</option>
              <option value="nirmal">Nirmal</option>
              <option value="warangal">Warangal</option>
            </select>
          </label>
          <br />
          <br></br>

          <div style={{ paddingRight: "288px" }}>
            <label>Bid End Date:</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeDate}
            />
          </div>
          <br />
          <div style={{ paddingRight: "52px" }}>
            <label>Upload images:</label>
            <input
              type="file"
              onChange={this.handleChangefiles}
              style={{
                color: "black",
              }}
            />

            <img src={this.state.files} />

            <button
              type="button"
              onClick={this.handleupload}
=======
                border: "1px solid #CED4DA",}}>Upload</button>
            <br />
            <br />
              <input type="submit" value="Submit"
>>>>>>> 5f691d0a1f4d9dc6aafa5f98c4578d5803b95131
              style={{
                backgroundColor: "#007BFF",
                borderRadius: "5px",
<<<<<<< HEAD
                width: "102px",
                height: "30px",
                color: "white",

=======
                width: "400px",
                height: "35px",
>>>>>>> 5f691d0a1f4d9dc6aafa5f98c4578d5803b95131
                border: "1px solid #CED4DA",
              }}
            >
              Upload
            </button>
          </div>
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            style={{
              color: "white",
              backgroundColor: "#007BFF",
              borderRadius: "5px",
              width: "480px",
              height: "35px",
              border: "1px solid #CED4DA",
            }}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Addproduct);
