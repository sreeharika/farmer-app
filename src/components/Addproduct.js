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
      
    render() {
        return (
            <div>
                <h1>Add product descrption</h1>
                <form onSubmit={this.handlesubmit}>
                <label>
          Product Descrption:
          <br />
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
          <br />
          <label>
            Crop type:
            <br />
            <select value={this.state.value} onChange={this.handleChange}>
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
          />{" "}
          <br />
          <label> Price </label>
          <br />
          <input
            type="number"
            name="number"
            value={this.state.name}
            placeholder= "Price in Rs"
            onChange={this.handlechange}
          />{" "}
          <br />
          <br />
          <label>
             Location:
             <br />
            <select value={this.state.value} onChange={this.handleChange}>
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
          <input type='file' onChange={this.handleChange} />
          <img src={this.state.file} />
          <br />
          <button type='button' onClick={this.handleupload}>Upload</button>
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
          <input type="submit" value="Submit" />
        </form>
            </div>
        );
    }
}
