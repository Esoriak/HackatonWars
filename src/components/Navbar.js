import React, { Component } from "react";
import './Navbar.css';
import { NavLink} from 'react-router-dom';

class Navbar extends Component{
    render() {
        return(

<header>
<div className="Navbar">
<img src="https://fontmeme.com/permalink/190412/db1be0467696baed59291bc6b4d585fa.png" alt="banstars"/>
<div className="barnavbar">
      
      <NavLink exact to="/"> Home 4 match</NavLink>
      <NavLink exact to="/Weddingnote"> Wedding note</NavLink>
      
      </div>
</div>
</header>

)
}   
}

export default Navbar;