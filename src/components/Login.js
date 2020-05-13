import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import axios from 'axios';

class Login extends Component {
    state = {
      email:'',
      password:'',
      isLogged: false,
      };
          
    handleChangeEmail = (event) => {
      this.setState({
        email: event.target.value,
      });
    };
    handleChangePassword = (event) => {
      this.setState({
        password: event.target.value,
      });
    };
    // handlePasswordChange = ({ event }) => {
    //     this.setState({ password: event.target.value });
    //   };
    
    handleSubmit = () => {
        const { dispatch } = this.props;
        dispatch(loginUser(this.state.email, this.state.password));
    }
    render() {
        const { classes, loginError, isAuthenticated } = this.props;
        console.log("isAuthenticated: ",isAuthenticated)
        if (isAuthenticated){
            return <Redirect to="/Farmerhome" />
        }
        return (
            <div className='loginpage'>
            
            <h3>Farmer App</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter email" onChange={this.handleChangeEmail} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" onChange={this.handleChangePassword} />
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

        </div>
    );
}
}

function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }
  export default connect(mapStateToProps)(Login);
  


// export default Login;
