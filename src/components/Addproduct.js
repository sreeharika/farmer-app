import React, { Component } from 'react';


export default class Addproduct extends Component {
    state={

    };

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
              <option value="tamato">tamato</option>
              <option value="chilli">chilli</option>
              <option value="rice">rice</option>
              <option value="wheat">wheat</option>
              <option value="Mango">Mango</option>
              <option value="sapota">sapota</option>
              <option value="mosambi">mosambi</option>
              <option value="thurad dal">toor dal</option>
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
          </label>
          <br />
          <br />
          <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button>
                <br />
                <br />
                <br />
          <input type="submit" value="Submit" />
        </form>
            </div>
        );
    }
}
