import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "./Nav.css"



const Nav = () =>{
  return(
    <nav>
      <ul>
        <li>
          <Link style={listStyle} to="/">Home</Link>
        </li>
        <li>
          <Link style={listStyle} to="/">About</Link>
        </li>

        <li>
          <Link style={listStyle} to="/">Movie List Editor</Link>
        </li>
        <li>
          <Link style={listStyle} to="/">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav