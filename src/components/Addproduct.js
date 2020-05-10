import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Addproduct extends Component {
    state={
      startDate: new Date(),
      file: null,
    };

    //setting state for any change
    handleChange = date => {
      console.log('date selected: ', date)
      this.setState({
        startDate: date
      });
    };

    // choose file event
    handleChange = (event) => {
      this.setState({
        file: URL.createObjectURL(event.target.file)
      })
    }

    handleupload = (event) => {
      console.log('fileuplaoded:');
    }
    
  

    handlechange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
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
                <h1>Add product descrption</h1>
                <form onSubmit={this.handlesubmit}>
                <label  style={{
                  color: "black",
                  paddingRight: "60px",
                }}>
          Product Descrption:
          <br />
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
          <br />
          <div style={{ paddingRight: "297px" }} />
          <label  style={{
            color: "black",
            paddingRight: "50px",
          }}>
            Crop type:
            <br />
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
            }}
            >
              <option value="tamato">Tamato</option>
              <option value="chilli">Chilli</option>
              <option value="rice">Rice</option>
              <option value="wheat">Wheat</option>
              <option value="Mango">Mango</option>
              <option value="sapota">Sapota</option>
              <option value="Mosambi">Mosambi</option>
              <option value="Toor dal">Tor dal</option>
            </select>
          </label>
          <br />
          <label> Weight</label>
          <br />
          <input
            type="number"
            name="number"
            value={this.state.name}
            placeholder= "weight in kgs/Tons"
            onChange={this.handlechange}
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
          }}> Price </label>
          <br />
          <input
            type="number"
            name="number"
            value={this.state.name}
            placeholder= "Price in Rs"
            onChange={this.handlechange}
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
            paddingRight: "50px",
          }}>
             Location:
             <br />
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
          <label>Upload images:</label>
          <br />
          <input type='file' onChange={this.handleChange} 
          style={{
            color: "black",
            paddingRight: "50px",
          }}/>
          <img src={this.state.file} />
          <br />
          <button type='button' onClick={this.handleupload} style={{
            backgroundColor: "#007BFF",
            borderRadius: "5px",
            width: "102px",
            height: "30px",
            color: "white",
            paddingLeft: "10px",
            paddingRight: "25px",
            border: "1px solid #CED4DA",
          }}>Upload</button>
                <br />
                <br />
                <label>Bid End Date:</label>
                <br />
                <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
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