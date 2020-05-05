// import React, { Component } from 'react'

// export default class Login extends Component {
//     state = {
//         name: '',
//         mobilenum: '',
//         email: '',
//         usertype: '',
//     };

//     render() {
//         return (
//             <div>
//              <input type='mobilenum' onChange={this.state} ></input>
//              <input type='OTP' onChange={this.state}></input>
//              <button onClick={this.state}>Login</button>
//             </div>
//         )
//     }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className='loginpage'>
            <form>
            <h3>Login</h3>

            <div className="form-group">
                <label>Mobile number</label>
                <input type="number" className="form-control" placeholder="Enter number" />
            </div>

            <div className="form-group">
                <label>One Time Password</label>
                <input type="OTP" className="form-control" placeholder="Enter OTP" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
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

// <Route path="/Register" component={Register} />