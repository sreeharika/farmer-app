import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: '',
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
    console.log("isAuthenticated: ", isAuthenticated)
    if (isAuthenticated) {
      return <Redirect to="/Farmerhome" />
    }
    return (
      <div id="bg"></div>
      <div class="wrapper fadeInDown">
        <div id="form">
          <div id="formHeader">
            <h2 class="active"> Sign In </h2>
            <h2 class="inactive underlineHover"><Link to={"/Register"}>Sign Up</Link></h2>
            <div class="fadeIn first">
              <i class="fa fa-user-circle-o"></i>
            </div>
            <div id="formContent">
              <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="Login" onChange={this.handleChangeEmail} />
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" onChange={this.handleChangePassword} />
                <input type="submit" class="fadeIn fourth" value="Log In" onClick={this.handleSubmit} />
              </form>
            </div>
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
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
