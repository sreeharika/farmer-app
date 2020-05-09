import React, { Component } from "react";

export default class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      value: "",
      name: "",
      value: "",
      selectedFile: null,
      startDate: new Date(),
    };
  }
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  handleChange = (date) => {
    console.log("date selected: ", date);
    this.setState({
      startDate: date,
    });
  };
  onFileUpload = () => {
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);
  };
  handlesubmit = (event) => {
    alert(`my title is ${this.state.firstname}. 
      My weight is ${this.state.lastname}.
      My price  is ${this.state.name}.
      My select type is ${this.state.value}.
      My location type is ${this.state.value}.
      My selectfile is ${this.state.selectedFile}.
     `);

    //console.log(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Add Product</h1>
        <br></br>
        <form onSubmit={this.handlesubmit}>
          <label
            style={{
              color: "black",
              paddingRight: "60px",
            }}
          >
            Title{" "}
          </label>
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handlechange}
            style={{
              // borderColor: "#0062cc",
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />
          <br />
          <br></br>
          <div style={{ paddingRight: "297px" }}>
            <label
              style={{
                color: "black",
                paddingRight: "50px",
              }}
            >
              Crop type:{" "}
            </label>
            <select
              value={this.state.value}
              onChange={this.handleChange}
              style={{
                backgroundColor: "#007bff",
                borderRadius: "5px",
                width: "135px",
                height: "30px",
                color: "white",
                paddingLeft: "10px",
                paddingRight: "25px",
                border: "1px solid #ced4da",
              }}
            >
              <option value="tomato">Tomato</option>
              <option value="chilli">chilli</option>
              <option value="rice">rice</option>
              <option value="wheat">wheat</option>
              <option value="Mango">Mango</option>
              <option value="sapota">sapota</option>
              <option value="mosambi">mosambi</option>
              <option value="thurad dal">toor dal</option>
            </select>
          </div>
          <br></br>
          <label
            style={{
              color: "black",
              paddingRight: "50px",
            }}
          >
            {" "}
            Weight
          </label>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            placeholder="weight in kgs/Tons"
            onChange={this.handlechange}
            style={{
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />{" "}
          <br />
          <br></br>
          <label
            style={{
              color: "black",
              paddingRight: "50px",
            }}
          >
            {" "}
            Price
          </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Price in Rs"
            onChange={this.handlechange}
            style={{
              borderRadius: "5px",
              width: "400px",
              border: "1px solid #ced4da",
            }}
          />{" "}
          <br />
          <br />
          <div style={{ paddingRight: "297px" }}>
            <label
              style={{
                color: "black",
                paddingRight: "50px",
              }}
            >
              Location:{" "}
            </label>

            <select
              value={this.state.value}
              onChange={this.handleChange}
              style={{
                backgroundColor: "#007bff",
                borderRadius: "5px",
                width: "135px",
                height: "30px",
                color: "white",
                paddingLeft: "10px",
                paddingRight: "25px",
                border: "1px solid #ced4da",
              }}
            >
              <option value="hyderabad">hyderabad</option>
              <option value="adilabad">adilabad</option>
              <option value="bhadradri">bhadradri</option>
              <option value="jagtial">jagtial</option>
              <option value="kamareddy">kamareddy</option>
              <option value="karimnagar">karimnagar</option>
              <option value="khammam">khammam</option>
              <option value="medak">medak</option>
              <option value="nirmal">nirmal</option>
              <option value="warangal">warangal</option>
            </select>
          </div>
          <br />
          <br />
          <label>Bid End Date:</label>
          <br />
          <br></br>
          <input
            type="file"
            onChange={this.onFileChange}
            style={{
              color: "black",
              paddingRight: "50px",
            }}
          />
          <button
            onClick={this.onFileUpload}
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
            Upload!
          </button>
          <br />
          <br />
          <br />
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
      </div>
    );
  }
}
