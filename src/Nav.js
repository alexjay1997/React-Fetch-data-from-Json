import React, { Component } from 'react';
import 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';
class Nav extends Component{

render(){

return(
    <div >
  
<div className="nav">
<div className="logo">
        React Sample
        </div>
    <ul>
        <Link to="/">
        <li>
            Home
            </li>
            </Link>

            <Link to="/About">
        <li>
            About
            </li>
            </Link>
        </ul>
    </div>
    </div>
);

}

}

export default Nav;