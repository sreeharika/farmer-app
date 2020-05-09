import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
        <h1>Farmer Product Bidding</h1>
        <div className='homelink'>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/Login"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Register"}>Register</Link>
        </li>
      </ul>
        </div>
    </div>
    )
}
