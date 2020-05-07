import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
    state = {
        mobilenum: '',
        otp: '',
        isLogged: false,
      }
    handleChangeNum = (event) => {
      this.setState({
        mobilenum: event.target.value,
      });
    };
    handleChangeOtp = (event) => {
      this.setState({
        otp: event.target.value,
      });
    };
    handleSubmit = () => {
        this.setState({
            isLogged: true,
        })
    }
    render() {
        if (this.state.isLogged === true){
            return <Redirect to="/Farmerhome" />
        }
        return (
            <div className='loginpage'>
            <form>
            <h3>Farmer App</h3>
            <div className="form-group">
                <label>Mobile number</label>
                <input type="number" className="form-control" placeholder="Enter number" onChange={this.props.handleChangeNum} />
            </div>

            <div className="form-group">
                <label>One Time Password</label>
                <input type="OTP" className="form-control" placeholder="Enter OTP" onChange={this.props.handleChangeOtp} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            <p className="New register text-left">
            Register<Link to={"/Register"}>Here</Link>
        </p>
        </form>
        </div>
    );
}
}
export default Login;
