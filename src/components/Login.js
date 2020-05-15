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
      <div class="login-div">
        <div class="logo"></div>
        <div class="title">Farmer's App</div>

        <div class="fields">
          <form>
            <div class="username"><svg fill="#999" viewBox="0 0 1024 1024">
              <path class="path1"
                d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z">
              </path>
            </svg><input type="username" class="user-input" placeholder="username" onChange={this.handleChangeEmail} /></div>
            <div class="password"><svg fill="#999" viewBox="0 0 1024 1024">
              <path class="path1"
                d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z">
              </path>
            </svg><input type="password" class="pass-input" placeholder="password" onChange={this.handleChangePassword} /></div>
          </form>
        </div>
        <button class="signin-button" onClick={this.handleSubmit}>Login</button>
        <div class="link">
          <a href="">Forgot password?</a> or <Link to={"/Register"}>Sign Up</Link>
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
