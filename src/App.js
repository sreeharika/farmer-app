import React, { Component } from 'react'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Farmerhome from './components/Farmerhome';



  function App() {
    return (
      <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Register"}>Register</Link>
              </li>
            </ul>
          </div>
      
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Farmerhome" component={Farmerhome} />
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

    
          // <a
          //   className="App-link"
          //   href="https://react-redux.js.org/"
          //   target="_blank"
          //   rel="noopener noreferrer"
          // >
          //   React Redux
          // </a>
      
  



