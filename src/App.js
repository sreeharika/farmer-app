import React, { Component } from 'react'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Farmerhome from './components/Farmerhome';
import Home from './components/Home';
import Addproduct from './components/Addproduct';



  function App() {
    return (
      <Router>
      <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Farmerhome" component={Farmerhome} />
            <Route exact path="/Addproduct" component={Addproduct} />
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
      
  



